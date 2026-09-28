// Simple in-memory rate limiter (per-IP sliding window).
// Good enough for a low-traffic portfolio contact form; resets on cold start.

type Entry = { timestamps: number[] };

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 3; // max submissions per IP per window

const store = new Map<string, Entry>();

export function checkRateLimit(ip: string): { allowed: boolean; retryAfterSeconds: number } {
  const now = Date.now();
  const entry = store.get(ip) ?? { timestamps: [] };

  // Keep only timestamps within the current window
  entry.timestamps = entry.timestamps.filter((t) => now - t < WINDOW_MS);

  if (entry.timestamps.length >= MAX_REQUESTS) {
    const oldest = entry.timestamps[0];
    const retryAfterSeconds = Math.ceil((WINDOW_MS - (now - oldest)) / 1000);
    store.set(ip, entry);
    return { allowed: false, retryAfterSeconds };
  }

  entry.timestamps.push(now);
  store.set(ip, entry);

  // Occasionally prune stale IPs so the map doesn't grow unbounded
  if (store.size > 500) {
    for (const [key, value] of store) {
      if (value.timestamps.every((t) => now - t >= WINDOW_MS)) {
        store.delete(key);
      }
    }
  }

  return { allowed: true, retryAfterSeconds: 0 };
}

export function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }
  const realIp = request.headers.get("x-real-ip");
  if (realIp) {
    return realIp.trim();
  }
  return "unknown";
}
