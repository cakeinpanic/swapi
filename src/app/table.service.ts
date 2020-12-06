import { Injectable } from '@angular/core'
import { forkJoin, Observable } from 'rxjs'
import { concatAll, map, mergeMap, switchMap } from 'rxjs/operators'
import { ApiService, IPilot, IPlanet, IVehicle, Population } from './api.service'

interface IVehicleInfo {
  name: string
  pilots: { name: string }[],
  planets: IPlanetInfo[]
  aggregatedPopulation: Population
}

interface IPlanetInfo {
  name: string,
  population: Population
}

@Injectable({ providedIn: 'root' })
export class TableService {
  constructor(private apiService: ApiService) {

  }

  calculate(): Observable<IVehicleInfo[]> {
    return this.getVehiclesWithPilots().pipe(
      mergeMap(vehicles => {
        return forkJoin(vehicles.map(v => this.getVehicleInfo(v)))
      })
    )
  }

  getVehicleInfo(vehicle: IVehicle): Observable<IVehicleInfo> {
    return forkJoin(vehicle.pilots.map(({ url }: IPilot) => this.getPilotHomelandInfo(url)))
      .pipe(
        map((planets: IPlanetInfo[]): IVehicleInfo => {
          return {
            name: vehicle.name,
            pilots: vehicle.pilots.map(({ name }) => ({ name })),
            planets,
            aggregatedPopulation: 0
          }
        }))
  }

  getVehiclesWithPilots(): Observable<IVehicle[]> {
    return this.apiService.getAllVehicles().pipe(map(v => v.filter(({ pilots }) => pilots.length > 0)))
  }

  getPilotHomelandInfo(pilotUrl: string): Observable<IPlanetInfo> {
    return this.apiService.getPilot(pilotUrl)
      .pipe(
        switchMap(({ homeworld }: IPilot) => this.apiService.getPlanet(homeworld)),
        map(({ name, population }) => ({ name, population })),
      )
  }
}
