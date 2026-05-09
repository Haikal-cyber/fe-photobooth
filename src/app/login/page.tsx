"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { type FormEvent, useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) {
        setError(data.error ?? "Login gagal.");
        return;
      }
      router.push("/generate");
      router.refresh();
    } catch {
      setError("Gagal menghubungi server.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-[#7b4038] px-6 py-12 font-sans text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 flex w-full max-w-[360px] flex-col items-center">
        <header className="mb-14 flex flex-col items-center">
          <div className="relative aspect-square w-[min(100vw-3rem,7.5rem)] overflow-hidden bg-[#7b4038] shadow-[0_4px_14px_rgba(0,0,0,0.22)]">
            <Image
              src="/monostrip-logo.png"
              alt="Monostrip"
              width={512}
              height={512}
              priority
              className="h-full w-full object-contain"
            />
          </div>
          <p className="mt-5 font-display text-[0.75rem] font-normal tracking-[0.42em] text-white">
            PHOTOBOOTH
          </p>
        </header>

        <form
          onSubmit={onSubmit}
          className="w-full rounded-sm border border-white/12 bg-[#5c3229] p-6 shadow-[0_8px_24px_rgba(0,0,0,0.28)]"
        >
          <div className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-[0.65rem] font-medium uppercase tracking-[0.12em] text-white"
              >
                EMAIL
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="user@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border-0 bg-[#e5e5e5] px-3 py-2.5 text-sm text-[#3d2a24] placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/25"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-1 block text-[0.65rem] font-medium uppercase tracking-[0.12em] text-white"
              >
                PASSWORD
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="Minimal 8 karakter"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-md border-0 bg-[#e5e5e5] px-3 py-2.5 text-sm text-[#3d2a24] placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/25"
              />
            </div>
          </div>

          {error ? (
            <p className="mt-4 text-center text-xs text-[#f0d5cf]" role="alert">
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="mt-9 w-full rounded-md bg-[#e5e5e5] py-3 text-sm font-semibold uppercase tracking-[0.08em] text-[#7b4038] transition-colors hover:bg-[#f0f0f0] disabled:opacity-60"
          >
            MASUK
          </button>
        </form>
      </div>
    </div>
  );
}
