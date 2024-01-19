import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css',
})
export class TabsComponent {
  characters = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Darth Vader', side: '' },
  ];
  chosenList = 'all';

  onChoose(side: string) {
    if (this.chosenList === side) {
      return;
    }

    this.chosenList = side;
  }

  getCharacters() {
    if (this.chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((char) => char.side === this.chosenList);
  }

  onSideAssigned(charInfo: { name: string; side: string }) {
    const pos = this.characters.findIndex(
      (char) => char.name === charInfo.name,
    );
    this.characters[pos].side = charInfo.side;
  }
}
