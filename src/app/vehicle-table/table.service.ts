import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { ApiService, IPilot, IPlanet, IVehicle, UNKNOWN_POPULATION } from '../api.service';

export interface IVehicleInfo {
  name: string;
  pilots: { name: string }[];
  planets: {
    name: string;
    population: string;
  }[];
  aggregatedPopulation: number;
}

@Injectable({ providedIn: 'root' })
export class TableService {
  constructor(private apiService: ApiService) {}

  async getTopPlanet(): Promise<IVehicleInfo> {
    const allVehicles: IVehicle[] = await this.getVehiclesWithPilots();
    const allVehiclesInfo: IVehicleInfo[] = [];
    for (const vehicle of allVehicles) {
      allVehiclesInfo.push(await this.getVehicleInfo(vehicle));
    }
    const sorted = allVehiclesInfo.sort((v1, v2) => v2.aggregatedPopulation - v1.aggregatedPopulation);
    return sorted[0];
  }

  private async getVehicleInfo(vehicle: IVehicle): Promise<IVehicleInfo> {
    const info: IVehicleInfo = {
      name: vehicle.name,
      pilots: [],
      planets: [],
      aggregatedPopulation: 0,
    };

    for (const pilotUrl of vehicle.pilots) {
      const { name: pilotName } = await this.getPilotInfo(pilotUrl);
      const { name: planetName, population } = await this.getPilotHomelandInfo(pilotUrl);
      info.planets.push({ name: planetName, population });
      info.pilots.push({ name: pilotName });
      info.aggregatedPopulation += population === UNKNOWN_POPULATION ? 0 : +population;
    }

    return info;
  }

  private async getPilotInfo(pilotUrl: string): Promise<IPilot> {
    return this.apiService.getPilot(pilotUrl).toPromise();
  }

  private async getVehiclesWithPilots(): Promise<IVehicle[]> {
    return this.apiService
      .getAllVehicles()
      .pipe(map(v => v.filter(({ pilots }) => pilots.length > 0)))
      .toPromise();
  }

  private async getPilotHomelandInfo(pilotUrl: string): Promise<IPlanet> {
    return this.apiService
      .getPilot(pilotUrl)
      .pipe(switchMap(({ homeworld }: IPilot) => this.apiService.getPlanet(homeworld)))
      .toPromise();
  }
}
