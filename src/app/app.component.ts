import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { TableService } from './table.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private tableService: TableService) {}

  ngOnInit() {
    this.tableService.calculate().subscribe(t => {
      console.log(t);
    });
  }
}
