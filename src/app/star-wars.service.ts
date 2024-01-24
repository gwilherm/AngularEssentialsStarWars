import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, map } from 'rxjs';
import { LogService } from './log.service';

@Injectable()
export class StarWarsService {
  logService: LogService;
  http: HttpClient;

  private characters = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Darth Vader', side: '' },
  ];
  charactersChanged = new Subject<void>();

  constructor(logService: LogService, http: HttpClient) {
    this.logService = logService;
    this.http = http;
  }

  fetchCharacters() {
    this.http
      .get('https://swapi.dev/api/people')
      .pipe(
        map((response: any) => {
          const data = response;
          const extractedChars = data.results;
          const chars = extractedChars.map((char: any) => {
            return { name: char.name, side: '' };
          });
          return chars;
        }),
      )
      .subscribe((data: any) => {
        console.log(data);
        this.characters = data;
      });
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
    this.charactersChanged.next();
    this.logService.writeLog(
      `Changed side of ${charInfo.name} to ${charInfo.side}`,
    );
  }

  addCharacter(name: string, side: string) {
    const pos = this.characters.findIndex((char) => char.name === name);
    if (pos !== -1) {
      return;
    }
    const newChar = { name: name, side: side };
    this.characters.push(newChar);
  }
}
