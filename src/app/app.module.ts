import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiService } from './api.service';

import { AppComponent } from './app.component';
import { ChartService } from './planet-chart/chart.service';
import { LoaderComponent } from './loader/loader.component';
import { PlanetChartComponent } from './planet-chart/planet-chart.component';
import { TableService } from './vehicle-table/table.service';
import { VehicleTableComponent } from './vehicle-table/vehicle-table.component';

@NgModule({
  declarations: [AppComponent, LoaderComponent, VehicleTableComponent, PlanetChartComponent, PlanetChartComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [ApiService, ChartService, TableService],
  bootstrap: [AppComponent],
})
export class AppModule {}
