import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService, IPlanet } from '../api.service';

export interface IChartData {
  value: number;
  label: string;
  name: string;
}

const MIN_BAR_HEIGHT = 10;

@Injectable({ providedIn: 'root' })
export class ChartService {
  constructor(private apiService: ApiService) {}

  private getPlanetsChartInfo(planetUrls: string[]): Observable<IPlanet[]> {
    return forkJoin(...planetUrls.map(url => this.apiService.getPlanet(url)));
  }

  getChartsData(planetUrls: string[]): Observable<IChartData[]> {
    return this.getPlanetsChartInfo(planetUrls).pipe(
      map(data => {
        const max = Math.max(...data.map(({ numberPopulation }) => numberPopulation));

        return data.map(({ numberPopulation, population, name }) => {
          let value = (numberPopulation / max) * 100;
          if (value <= MIN_BAR_HEIGHT) {
            value += MIN_BAR_HEIGHT;
          }
          return { name, value, label: population };
        });
      })
    );
  }
}
