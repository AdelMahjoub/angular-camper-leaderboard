import { Camper } from './../camper.model';
import { CampersService } from './../campers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  constructor(private campersService: CampersService) { }

  feature = 'all';
  searchTerm = '';
  campers: Camper[];

  ngOnInit() {
    this.campersService.searchTermChanged.subscribe(term => {
      this.searchTerm = term;
      return this.updateCampers();
    });
    this.campersService.featureSelected.subscribe(feature => {
      this.feature = feature;
      return this.updateCampers();
    });
    return this.updateCampers();
  }

  updateCampers() {
    this.campersService.getCampers(this.feature)
      .subscribe((data: Camper[]) => {
        data.forEach((camper: Camper, index: number) => {
          camper['rank'] = index + 1;
        });
        this.campers = data;
        if(this.searchTerm !== '') {
          let patt = new RegExp(this.searchTerm, 'i');
          this.campers = this.campers.filter(camper => patt.test(camper.username));
        }
      });
  }
}
