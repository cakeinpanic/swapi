import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService, IPlanet } from '../api.service';

export interface IPlanetData {
  name: string;
  value: number;
}

@Injectable({ providedIn: 'root' })
export class ChartService {
  constructor(private apiService: ApiService) {}

  getPlanetsInfo(planetNames: string[]): Observable<IPlanetData[]> {
    return of([
      { name: 'tat', value: 1000 },
      { name: 'tat', value: 10000 },
      { name: 'tat', value: 1000 },
      { name: 'tat', value: 10000 },
      { name: 'tat', value: 8778 },
      { name: 'mom', value: 10000 },
    ]);
  }
}
