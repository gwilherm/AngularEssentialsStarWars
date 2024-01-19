import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input() characters: any[] = [];
  @Output() sideAssigned = new EventEmitter<{ name: string; side: string }>();

  onSideAssigned(charInfo: { name: string; side: string }) {
    this.sideAssigned.emit(charInfo);
  }
}
