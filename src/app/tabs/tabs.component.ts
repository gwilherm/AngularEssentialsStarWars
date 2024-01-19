import { Component } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css',
  providers: [StarWarsService],
})
export class TabsComponent {
  characters: any[] = [];
  chosenList = 'all';
  swService: StarWarsService;

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  getCharacters() {
    return this.swService.getCharacters(this.chosenList);
  }

  onChoose(side: string) {
    if (this.chosenList === side) {
      return;
    }

    this.chosenList = side;
  }
}
