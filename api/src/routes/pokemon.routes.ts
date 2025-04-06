import { Router } from "express";
import {
  getAllPokemon,
  getPokemonDetails,
} from "../controllers/pokemon.controller";

const router = Router();

router.get("/", getAllPokemon);
router.get("/:name", getPokemonDetails);

export default router;
