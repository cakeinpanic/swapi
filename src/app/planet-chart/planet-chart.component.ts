import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { mapTo, startWith, tap } from 'rxjs/operators';
import { ChartService, IChartData } from './chart.service';

@Component({
  selector: 'app-planet-chart',
  templateUrl: './planet-chart.component.html',
  styleUrls: ['./planet-chart.component.scss'],
})
export class PlanetChartComponent implements OnInit {
  @Input() planetUrls: string[];
  planetData: IChartData[] = [];
  isLoaded = false;

  constructor(private chartService: ChartService) {}

  async ngOnInit() {
    this.isLoaded = false;
    this.chartService.getChartsData(this.planetUrls).subscribe(data => {
      this.planetData = data;
      this.isLoaded = true;
    });
  }
}
