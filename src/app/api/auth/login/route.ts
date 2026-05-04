import { NextResponse } from "next/server";
import {
  authCookieBaseOptions,
  MONOSTRIP_ACCESS_TOKEN_COOKIE,
  MONOSTRIP_AUTH_MAX_AGE,
  MONOSTRIP_USER_COOKIE,
} from "@/lib/session";
import { CRAFIX_AUTH_LOGIN, type CrafixLoginResponse } from "@/lib/crafix-api";

type LoginBody = {
  email?: unknown;
  password?: unknown;
};

export async function POST(request: Request) {
  let body: LoginBody;
  try {
    body = (await request.json()) as LoginBody;
  } catch {
    return NextResponse.json({ error: "Body tidak valid" }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  const password = typeof body.password === "string" ? body.password : "";

  if (!email || !password) {
    return NextResponse.json(
      { error: "Email dan password wajib diisi." },
      { status: 400 }
    );
  }

  const upstream = await fetch(CRAFIX_AUTH_LOGIN, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
    cache: "no-store",
  });

  const text = await upstream.text();

  if (!upstream.ok) {
    try {
      const err = JSON.parse(text) as { message?: string; error?: string };
      const msg =
        (typeof err.message === "string" && err.message) ||
        (typeof err.error === "string" && err.error) ||
        "Email atau password salah.";
      return NextResponse.json({ error: msg }, { status: upstream.status });
    } catch {
      return NextResponse.json(
        { error: text || "Login gagal." },
        { status: upstream.status }
      );
    }
  }

  let data: CrafixLoginResponse;
  try {
    data = JSON.parse(text) as CrafixLoginResponse;
  } catch {
    return NextResponse.json(
      { error: "Respons login tidak valid." },
      { status: 502 }
    );
  }

  if (
    typeof data.accessToken !== "string" ||
    !data.accessToken ||
    typeof data.user !== "object" ||
    data.user === null
  ) {
    return NextResponse.json(
      { error: "Respons login tidak lengkap." },
      { status: 502 }
    );
  }

  const base = authCookieBaseOptions();
  const res = NextResponse.json({
    user: data.user,
  });

  res.cookies.set(MONOSTRIP_ACCESS_TOKEN_COOKIE, data.accessToken, {
    ...base,
    httpOnly: true,
    maxAge: MONOSTRIP_AUTH_MAX_AGE,
  });

  res.cookies.set(MONOSTRIP_USER_COOKIE, JSON.stringify(data.user), {
    ...base,
    httpOnly: true,
    maxAge: MONOSTRIP_AUTH_MAX_AGE,
  });

  return res;
}
