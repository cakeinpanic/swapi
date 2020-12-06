import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import {Memoize} from 'typescript-memoize';

import { Observable, of } from 'rxjs'
import { expand, reduce, switchMap } from 'rxjs/operators'
import { Cacheable } from 'ts-cacheable';

export interface IVehicle {
  pilots: IPilot[]
  url: string
  name: string
}

export interface IPilot {
  name: string
  url: string
  homeworld: string
}

export interface IPlanet {
  name: string
  url: string
  population: Population
}

export type Population = number | 'unknown'

interface IRequestResult<T> {
  next: string
  results: T
}

const PilotCache: Map<string, any> = new Map()
const VehicleCache: Map<string, IVehicle> = new Map()
const PlanetCache: Map<string, IPlanet> = new Map()

@Injectable({ providedIn: 'root' })
export class ApiService {

  constructor(private http: HttpClient) {

  }

  //@Cacheable()
  getAllVehicles(url = 'https://swapi.dev/api/vehicles/'): Observable<IVehicle[]> {
    return this.http.get<IRequestResult<IVehicle[]>>(url).pipe(
      expand((res) => res.next ? this.getAllVehicles(res.next) : []),
      reduce((acc, res) => acc.concat(res.data), [])
    )
  }


  @Cacheable()
  getPilot(pilotUrl: string): Observable<IPilot> {
    return this.http.get<IPilot>(pilotUrl)
  }

  @Cacheable()
  getPlanet(platenUrl: string): Observable<IPlanet> {
    return this.http.get<IPlanet>(platenUrl)
  }
}
