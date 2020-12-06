import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApiService } from './api.service';

import { AppComponent } from './app.component';
import { TableService } from './table.service';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [AppComponent, LoaderComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [ApiService, TableService],
  bootstrap: [AppComponent],
})
export class AppModule {}
