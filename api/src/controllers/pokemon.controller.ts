import { Request, Response } from "express";
import {
  fetchAllPokemon,
  fetchPokemonDetails,
} from "../services/pokemon.service";

export const getAllPokemon = async (req: Request, res: Response) => {
  try {
    const offset = parseInt(req.query.offset as string) || 0;
    const limit = parseInt(req.query.limit as string) || 20;

    const pokemonList = await fetchAllPokemon(offset, limit);
    res.json(pokemonList);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch Pokémon data" });
  }
};

export const getPokemonDetails = async (req: Request, res: Response) => {
  try {
    const { name } = req.params;
    const details = await fetchPokemonDetails(name);
    res.json(details);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch Pokémon details" });
  }
};
