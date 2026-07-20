import { arcana } from "@/infrastructure/data/arcana";
import { Arcanum } from "../entities/arcanum";

function hash(str: string): number {
  let h = 5381
  for (let i = 0; i < str.length; i++) {
    h = (h * 33) ^ str.charCodeAt(i)
  }
  return Math.abs(h)
}

function todayString(): string {
  return new Date().toISOString().slice(0, 10)
}

export const getArcanumForUser = function (userId?: string): Arcanum {
  const seed = `${todayString()}-${userId ?? "anonymous"}`
  const index = hash(seed) % arcana.length
  return arcana[index]
}
