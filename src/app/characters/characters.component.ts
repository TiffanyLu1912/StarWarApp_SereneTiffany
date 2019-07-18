import { Component, OnInit } from '@angular/core';

import { Character } from '../character';
// import { CHARACTERS } from '../mock-characters';
import { CharacterService } from '../character.service';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
// export class CharactersComponent implements OnInit {
//   constructor(private characterService: CharacterService) { }
//   // character: Character = {
//   //   id: 1,
//   //   name: 'Leia Organa',
//   //   birthYear: '1988Y',
//   //   species: 'Human',
//   //   height: '150cm',
//   //   mass: '49kg',
//   //   gender: 'Female',
//   //   hairColor: 'Brown',
//   //   skinColor: 'Light',
//   //   homeWorld: 'Alderaan',
//   //   comments:'Luke is her brother'
//   // };
  
//     selectedCharacter:Character;
//     characters:Character[];

//   ngOnInit() {
//     this.getCharacters();
//   }

//   onSelect(character:Character):void{
//     this.selectedCharacter=character;
//   }

//   getCharacters(): void {
//     this.characterService.getCharacters()
//         .subscribe(characters => this.characters = characters);
//   }
// }


export class CharactersComponent implements OnInit {
  characters: Character[];

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters(): void {
    this.characterService.getCharacters()
    .subscribe(characters => this.characters = characters);
  }
}