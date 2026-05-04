import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { CRAFIX_CODES_BASE, type GenerateCodeResponse } from "@/lib/crafix-api";
import { MONOSTRIP_ACCESS_TOKEN_COOKIE } from "@/lib/session";

export async function GET() {
  const store = await cookies();
  const token = store.get(MONOSTRIP_ACCESS_TOKEN_COOKIE)?.value;

  if (!token) {
    return NextResponse.json(
      { error: "Sesi tidak valid. Silakan masuk lagi." },
      { status: 401 }
    );
  }

  const upstream = await fetch(`${CRAFIX_CODES_BASE}/generate`, {
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const text = await upstream.text();
  if (!upstream.ok) {
    return NextResponse.json(
      { error: text || upstream.statusText },
      { status: upstream.status }
    );
  }

  try {
    const data = JSON.parse(text) as GenerateCodeResponse;
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Respons API tidak valid" },
      { status: 502 }
    );
  }
}
