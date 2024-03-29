import { Component } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrl: './create-character.component.css',
})
export class CreateCharacterComponent {
  availableSides = [
    { display: 'None', value: '' },
    { display: 'Light', value: 'light' },
    { display: 'Dark', value: 'dark' },
  ];
  defaultName = 'Obi-Wan Kenobi';

  swService: StarWarsService;

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  onSubmit(submittedForm: any) {
    if (submittedForm.invalid) {
      return;
    }
    console.log(submittedForm.value);
    this.swService.addCharacter(
      submittedForm.value.name,
      submittedForm.value.side,
    );
  }
}
