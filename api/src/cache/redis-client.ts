import dotenv from "dotenv";
import { createClient } from "redis";

dotenv.config();

const redisClient = createClient({ url: process.env.REDIS_URL });

redisClient.connect().catch(console.error);

export const getCache = async (key: string) => {
  return await redisClient.get(key);
};

export const setCache = async (key: string, value: string, ttl: number) => {
  await redisClient.setEx(key, ttl, value);
};

export const clearCacheKey = async (key: string) => {
  await redisClient.del(key);
};

export const clearCachePattern = async (pattern: string) => {
  const keys = await redisClient.keys(pattern);
  if (keys.length === 0) return;
  await redisClient.del(keys);
};

export const disconnectRedis = async () => {
  await redisClient.disconnect();
};
