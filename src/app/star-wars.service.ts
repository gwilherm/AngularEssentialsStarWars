export class StarWarsService {
  private characters = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Darth Vader', side: '' },
  ];

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
  }
}
