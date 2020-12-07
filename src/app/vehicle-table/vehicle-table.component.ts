import { Component, OnInit } from '@angular/core';
import { IVehicleInfo, TableService } from './table.service';

@Component({
  selector: 'app-vehicle-table',
  templateUrl: './vehicle-table.component.html',
  styleUrls: ['./vehicle-table.component.scss'],
})
export class VehicleTableComponent implements OnInit {
  topVehicle: IVehicleInfo = null;
  isLoaded = false;

  constructor(private tableService: TableService) {}

  async ngOnInit() {
    this.isLoaded = false;
    this.topVehicle = await this.tableService.getTopPlanet();
    this.isLoaded = true;
  }
}
