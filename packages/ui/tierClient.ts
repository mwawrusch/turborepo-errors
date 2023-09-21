import invariant from 'tiny-invariant';
// import tier from "tier"
import { Tier } from 'tier/client'

invariant(process.env.TIER_BASE_URL, 'process.env.TIER_BASE_URL must be defined')
invariant(process.env.TIER_API_KEY, 'process.env.TIER_API_KEY must be defined')

// export const tierClient = tier;

export const tierClient = new Tier({
  baseURL: process.env.TIER_BASE_URL,
  apiKey: process.env.TIER_API_KEY,
});



