import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { IVehicleInfo, TableService } from './table.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  topVehicle: IVehicleInfo = null;
  isLoaded = false;

  constructor(private apiService: ApiService, private tableService: TableService) {}

  async ngOnInit() {
    this.isLoaded = false;
    this.topVehicle = await this.tableService.getTopPlanet();
    //this.isLoaded = true
  }
}
