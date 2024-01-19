import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class ItemComponent {
  @Input() character: any = {};

  onAssign(side: string) {
    if (this.character.side === side) {
      this.character.side = '';
    } else {
      this.character.side = side;
    }
  }
}
