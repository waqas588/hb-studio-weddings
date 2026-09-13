/**
 * Minimal in-memory rate limiter.
 *
 * This is fine for a single-instance deployment or light traffic, but
 * an in-memory map is NOT shared across serverless function
 * invocations or multiple regions/instances. Before relying on this
 * in a high-traffic production deployment (Vercel/Netlify serverless
 * functions scale horizontally), replace it with a durable store such
 * as Upstash Redis, Vercel KV, or a WAF-level rate limit rule — the
 * `check` function signature below is designed to be swapped out
 * without touching the route handler.
 */

interface Bucket {
  count: number;
  resetAt: number;
}

const buckets = new Map<string, Bucket>();

const WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS = 5; // per window, per key (e.g. per IP)

export function checkRateLimit(key: string): { allowed: boolean; retryAfterSeconds?: number } {
  const now = Date.now();
  const existing = buckets.get(key);

  if (!existing || existing.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true };
  }

  if (existing.count >= MAX_REQUESTS) {
    return {
      allowed: false,
      retryAfterSeconds: Math.ceil((existing.resetAt - now) / 1000),
    };
  }

  existing.count += 1;
  return { allowed: true };
}
