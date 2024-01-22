import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable()
export class StarWarsService {
  logService: LogService;
  private characters = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Darth Vader', side: '' },
  ];

  constructor(logService: LogService) {
    this.logService = logService;
  }

  getCharacters(chosenList: string) {
    if (chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((char) => char.side === chosenList);
  }

  onSideAssigned(charInfo: { name: string; side: string }) {
    const pos = this.characters.findIndex(
      (char) => char.name === charInfo.name,
    );
    this.characters[pos].side = charInfo.side;
    this.logService.writeLog(
      `Changed side of ${charInfo.name} to ${charInfo.side}`,
    );
  }

  addCharacter(name: string, side: string) {
    const newChar = { name: name, side: side };
    this.characters.push(newChar);
  }
}
