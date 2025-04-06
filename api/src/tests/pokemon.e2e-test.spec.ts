import request from "supertest";
import app from "../app";
import { disconnectRedis } from "../cache/redis-client";

describe("GET /pokemons/:name", () => {
  afterAll(() => {
    disconnectRedis();
  });

  it("should return details for Venusaur", async () => {
    const res = await request(app).get("/api/pokemon/venusaur");

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("name", "venusaur");
    expect(res.body).toHaveProperty("types");
    expect(res.body.types).toContain("grass");
    expect(res.body).toHaveProperty("region");
    expect(res.body).toHaveProperty("weaknesses");
  });

  it("should return 500 for an invalid name", async () => {
    const res = await request(app).get("/api/pokemon/notapokemon");

    expect(res.status).toBe(500);
    expect(res.body).toHaveProperty("error", "Failed to fetch Pokémon details");
  });
});
