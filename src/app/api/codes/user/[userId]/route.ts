import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { CRAFIX_CODES_BASE, type UserCodeItem } from "@/lib/crafix-api";
import {
  MONOSTRIP_ACCESS_TOKEN_COOKIE,
  MONOSTRIP_USER_COOKIE,
} from "@/lib/session";

type Params = { params: Promise<{ userId: string }> };

export async function GET(_: Request, { params }: Params) {
  const { userId } = await params;
  const store = await cookies();
  const token = store.get(MONOSTRIP_ACCESS_TOKEN_COOKIE)?.value;

  if (!token) {
    return NextResponse.json(
      { error: "Sesi tidak valid. Silakan masuk lagi." },
      { status: 401 }
    );
  }

  const rawUser = store.get(MONOSTRIP_USER_COOKIE)?.value;
  if (rawUser) {
    try {
      const parsed = JSON.parse(rawUser) as { id?: unknown };
      if (typeof parsed.id === "string" && parsed.id !== userId) {
        return NextResponse.json({ error: "Akses ditolak." }, { status: 403 });
      }
    } catch {
      /* ignore malformed cookie */
    }
  }

  const upstream = await fetch(`${CRAFIX_CODES_BASE}/user/${userId}`, {
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
    const data = JSON.parse(text) as UserCodeItem[];
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Respons API tidak valid" },
      { status: 502 }
    );
  }
}
