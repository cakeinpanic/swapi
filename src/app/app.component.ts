import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  planetUrls = [
    'http://swapi.dev/api/planets/1/',
    'http://swapi.dev/api/planets/2/',
    'http://swapi.dev/api/planets/8/',
    'http://swapi.dev/api/planets/6/',
    'http://swapi.dev/api/planets/7/',
  ];
}
