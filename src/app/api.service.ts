import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { EMPTY, Observable } from 'rxjs'
import { expand, reduce } from 'rxjs/operators'
import { Cacheable } from 'ts-cacheable'

export interface IVehicle {
  pilots: string[]
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

interface IRequestResult {
  next: string
  results: IVehicle[]
}

@Injectable({ providedIn: 'root' })
export class ApiService {

  constructor(private http: HttpClient) {

  }

  @Cacheable()
  getAllVehicles(url = 'https://swapi.dev/api/vehicles/'): Observable<IVehicle[]> {
    return this.http.get<IRequestResult>(url).pipe(
      expand((res) => {
        return res.next ? this.http.get<IRequestResult>(res.next) : EMPTY
      }),
      reduce<IRequestResult, IVehicle[]>((acc: IVehicle[], res: IRequestResult) => {
        return acc.concat(res.results)
      }, [])
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
