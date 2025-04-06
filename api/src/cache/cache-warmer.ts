import axios from "axios";
import cron from "node-cron";
import { fetchAllPokemon } from "../services/pokemon.service";
import { clearCachePattern } from "./redis-client";

const PAGE_LIMIT = 50;

export const startCacheWarmer = () => {
  refreshWholeCache();

  cron.schedule("0 * * * *", async () => {
    refreshWholeCache();
  });
};

const refreshWholeCache = async () => {
  console.log("⏰ Running cache warm...");

  try {
    const { data } = await axios.get(`${process.env.POKE_API_URL}/pokemon`);
    const total = data.count;

    clearCachePattern("*");
    for (let offset = 0; offset < total; offset += PAGE_LIMIT) {
      await fetchAllPokemon(offset, PAGE_LIMIT);
      console.log(`✅ Warmed page at offset ${offset}`);
    }

    console.log("🔥 Cache warming complete.");
  } catch (err) {
    console.error("❌ Failed to warm cache", err);
  }
};
