import { Injectable } from '@angular/core'
import { forkJoin, Observable, of } from 'rxjs'
import { map, mergeMap, switchMap } from 'rxjs/operators'
import { ApiService, IPilot, IVehicle, Population } from './api.service'

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

interface IPilotExtendedInfo {
  planet: IPlanetInfo
  name: string
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
    return forkJoin(vehicle.pilots.map((pilot: string) => {
      return this.getPilotHomelandInfo(pilot)
    }))
      .pipe(
        map((planets: IPilotExtendedInfo[]): IVehicleInfo => {
          return {
            name: vehicle.name,
            pilots: planets.map(({ name }) => ({name})),
            planets: planets.map(({ planet }) => planet),
            aggregatedPopulation: 0
          }
        }))
  }

  getVehiclesWithPilots(): Observable<IVehicle[]> {
    return this.apiService.getAllVehicles().pipe(map(v => {
      debugger
      return v.filter(({ pilots }) => pilots.length > 0)
    }))
  }

  getPilotHomelandInfo(pilotUrl: string): Observable<IPilotExtendedInfo> {
    return this.apiService.getPilot(pilotUrl)
      .pipe(
        switchMap(({ homeworld, name }: IPilot) => forkJoin(this.apiService.getPlanet(homeworld), of(name))),
        map(([{ name, population }, pilotName]) => ({ name: pilotName, planet: { name, population } })),
      )
  }
}
