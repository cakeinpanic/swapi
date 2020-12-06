import { Component, OnInit } from '@angular/core';
import { ApiService, IPlanet } from '../api.service';
import { ChartService, IPlanetData } from './chart.service';
import { IVehicleInfo, TableService } from '../vehicle-table/table.service';

@Component({
  selector: 'app-planet-chart',
  templateUrl: './planet-chart.component.html',
  styleUrls: ['./planet-chart.component.scss'],
})
export class PlanetChartComponent implements OnInit {
  planetData: IPlanetData[] = [];
  isLoaded = false;
  max: number;

  constructor(private chartService: ChartService) {}

  async ngOnInit() {
    this.isLoaded = false;
    this.chartService.getPlanetsInfo(['f']).subscribe(data => {
      this.planetData = data;
      const max = Math.max(...this.planetData.map(({ value }) => value));
      this.planetData = data.map(({ value, name }) => ({ name, value: (value / max) * 100 }));

      this.isLoaded = true;
    });
  }
}
