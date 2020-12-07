import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { ApiService, IPlanet } from '../api.service';

@Injectable({ providedIn: 'root' })
export class ChartService {
  constructor(private apiService: ApiService) {}

  getPlanetsInfo(planetUrls: string[]): Observable<IPlanet[]> {
    return forkJoin(...planetUrls.map(url => this.apiService.getPlanet(url)));
  }
}
