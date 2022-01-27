import { Character } from '../models';
import { characters } from '../mock';

class CharacterService {
  private characters: Character[];

  constructor() {
    this.characters = characters;
  }

  public getAllCharacters(): Character[] {
    return this.characters;
  }

  public getCharacterById(id: string): Character[] {
    return this.characters.filter((character) => character.id === id);
  }
}

export default CharacterService;
