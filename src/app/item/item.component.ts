import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class ItemComponent {
  @Input() character: any = {};
  @Output() sideAssigned = new EventEmitter<{ name: string; side: string }>();

  onAssign(side: string) {
    this.sideAssigned.emit({ name: this.character.name, side: side });
  }
}
