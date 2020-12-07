import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { mapTo, startWith } from 'rxjs/operators';
import { ChartService, IChartData } from './chart.service';

@Component({
  selector: 'app-planet-chart',
  templateUrl: './planet-chart.component.html',
  styleUrls: ['./planet-chart.component.scss'],
})
export class PlanetChartComponent {
  planetData$: Observable<IChartData[]> = this.chartService.getChartsData([
    'http://swapi.dev/api/planets/1/',
    'http://swapi.dev/api/planets/2/',
    'http://swapi.dev/api/planets/6/',
    'http://swapi.dev/api/planets/7/',
    'http://swapi.dev/api/planets/8/',
  ]);

  isLoaded$: Observable<boolean> = this.planetData$.pipe(mapTo(true), startWith(false));

  constructor(private chartService: ChartService) {}
}
