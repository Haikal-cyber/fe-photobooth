import { NextResponse } from "next/server";
import {
  authCookieBaseOptions,
  MONOSTRIP_ACCESS_TOKEN_COOKIE,
  MONOSTRIP_USER_COOKIE,
} from "@/lib/session";

export async function POST() {
  const base = authCookieBaseOptions();
  const res = NextResponse.json({ ok: true as const });

  res.cookies.set(MONOSTRIP_ACCESS_TOKEN_COOKIE, "", {
    ...base,
    httpOnly: true,
    maxAge: 0,
  });
  res.cookies.set(MONOSTRIP_USER_COOKIE, "", {
    ...base,
    httpOnly: true,
    maxAge: 0,
  });

  return res;
}
