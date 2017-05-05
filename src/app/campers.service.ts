import { Camper } from './camper.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class CampersService {

  allTimeUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
  latestUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';

  constructor(private http: Http) { }

  getCampers(feature: string): Observable<Camper[]> {
    if(feature === 'all') {
      return this.http.get(this.allTimeUrl)
        .map((response: Response) => response.json());
    } else {
      return this.http.get(this.latestUrl)
        .map((response: Response) => response.json());
    }
  }

  featureSelected = new EventEmitter<string>();

  searchTermChanged = new EventEmitter<string>();

}

