import { Injectable } from '@angular/core';

import { Character } from './character';
import { CHARACTERS } from './mock-characters';

import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  // constructor() { }
  constructor(private messageService: MessageService) { }

  getCharacters(): Observable<Character[]> {
    this.messageService.add('CharacterService: fetched characters');
    return of (CHARACTERS);
  }


  getCharacter(id: number): Observable<Character> {
  // TODO: send the message _after_ fetching the hero
  this.messageService.add(`CharacterService: fetched character id=${id}`);
  return of(CHARACTERS.find(character => character.id === id));
 }



}
