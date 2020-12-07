import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { EMPTY, Observable } from 'rxjs';
import { expand, map, reduce, shareReplay } from 'rxjs/operators';

export interface IVehicle {
  pilots: string[];
  url: string;
  name: string;
}

export interface IPilot {
  name: string;
  url: string;
  homeworld: string;
}

export interface IPlanet {
  name: string;
  url: string;
  population: string;
  numberPopulation?: number;
}

export const UNKNOWN_POPULATION = 'unknown';

interface IRequestResult {
  next: string;
  results: IVehicle[];
}

// swapi returns urls with http, need to force https to let app be deployed to gh-pages
const forceHttps = (url: string): string => url.replace('http://', 'https://');

@Injectable({ providedIn: 'root' })
export class ApiService {
  private pilotCache = new Map();
  private planetCache = new Map();

  constructor(private http: HttpClient) {}

  getAllVehicles(url = 'https://swapi.dev/api/vehicles/'): Observable<IVehicle[]> {
    return this.http.get<IRequestResult>(url).pipe(
      expand(res => (res.next ? this.http.get<IRequestResult>(forceHttps(res.next)) : EMPTY)),
      reduce<IRequestResult, IVehicle[]>((acc: IVehicle[], res: IRequestResult) => acc.concat(res.results), [])
    );
  }

  getPilot(pilotUrl: string): Observable<IPilot> {
    return this.cacheRequest<IPilot>(forceHttps(pilotUrl), this.pilotCache);
  }

  getPlanet(planetUrl: string): Observable<IPlanet> {
    return this.cacheRequest<IPlanet>(forceHttps(planetUrl), this.planetCache).pipe(
      map(planet => ({
        ...planet,
        numberPopulation: planet.population === UNKNOWN_POPULATION ? 0 : +planet.population,
      }))
    );
  }

  private cacheRequest<T>(url, cache): Observable<T> {
    const cached = cache.get(url);

    if (!!cached) {
      return cached;
    }

    const request = this.http.get<T>(url).pipe(shareReplay({ refCount: true, bufferSize: 1 }));
    cache.set(url, request);
    return request;
  }
}
