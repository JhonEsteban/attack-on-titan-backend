import { Request, Response } from 'express';
import { CharacterService } from '../services';

const characterService = new CharacterService();

const getAllCharacters = (req: Request, res: Response) => {
  const characters = characterService.getAllCharacters();

  res.json({
    characters,
  });
};

const getCharacterById = (req: Request, res: Response) => {
  const { id } = req.params;
  const character = characterService.getCharacterById(id);

  res.json({
    character,
  });
};

export { getAllCharacters, getCharacterById };
