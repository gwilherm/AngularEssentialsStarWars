import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
  providers: [StarWarsService],
})
export class ItemComponent {
  @Input() character: any = {};
  swService: StarWarsService;

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  onAssign(side: string) {
    this.swService.onSideAssigned({ name: this.character.name, side: side });
  }
}
