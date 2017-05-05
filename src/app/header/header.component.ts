import { CampersService } from './../campers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private campersService: CampersService) { }

  ngOnInit() {
  }

  onFeatureChange(e: Event) {
    this.campersService.featureSelected.emit((<HTMLSelectElement>e.target).value);
  }

  onSearchTermChange(e: Event) {
    this.campersService.searchTermChanged.emit((<HTMLInputElement>e.target).value);
    console.log((<HTMLInputElement>e.target).value)
  }

}
