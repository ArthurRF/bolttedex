import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { startCacheWarmer } from "./cache/cache-warmer";
import pokemonRoutes from "./routes/pokemon.routes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});
app.use("/api/pokemon", pokemonRoutes);

if (process.env.NODE_ENV !== "test") {
  startCacheWarmer();
}

export default app;
