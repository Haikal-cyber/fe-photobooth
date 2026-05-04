import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { MONOSTRIP_ACCESS_TOKEN_COOKIE, MONOSTRIP_USER_COOKIE } from "@/lib/session";
import type { CrafixUser } from "@/lib/crafix-api";

export async function GET() {
  const store = await cookies();
  const token = store.get(MONOSTRIP_ACCESS_TOKEN_COOKIE)?.value;
  if (!token) {
    return NextResponse.json({ user: null as CrafixUser | null });
  }

  const raw = store.get(MONOSTRIP_USER_COOKIE)?.value;
  let user: CrafixUser | null = null;
  if (raw) {
    try {
      const parsed = JSON.parse(raw) as CrafixUser;
      if (
        parsed &&
        typeof parsed.id === "string" &&
        typeof parsed.email === "string" &&
        typeof parsed.name === "string"
      ) {
        user = parsed;
      }
    } catch {
      /* ignore */
    }
  }

  return NextResponse.json({ user });
}
