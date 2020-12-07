import { Component, OnInit } from '@angular/core';
import { ChartService } from './chart.service';

interface IChartData {
  value: number;
  label: string;
  name: string;
}

@Component({
  selector: 'app-planet-chart',
  templateUrl: './planet-chart.component.html',
  styleUrls: ['./planet-chart.component.scss'],
})
export class PlanetChartComponent implements OnInit {
  planetData: IChartData[] = [];
  isLoaded = false;

  constructor(private chartService: ChartService) {}

  async ngOnInit() {
    this.isLoaded = false;
    this.chartService
      .getPlanetsInfo([
        'http://swapi.dev/api/planets/1/',
        'http://swapi.dev/api/planets/2/',
        'http://swapi.dev/api/planets/6/',
        'http://swapi.dev/api/planets/7/',
        'http://swapi.dev/api/planets/8/',
      ])
      .subscribe(data => {
        const max = Math.max(...data.map(({ population }) => +population));
        this.planetData = data.map(({ population, name }) => {
          const value = +population;
          return { name, value: (value / max) * 100, label: population };
        });

        this.isLoaded = true;
      });
  }
}
