"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import type { CrafixUser } from "@/lib/crafix-api";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoginError(null);
    if (!email.trim() || !password) {
      setLoginError("Email dan password wajib diisi.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          password,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
        user?: CrafixUser;
      };
      if (!res.ok) {
        setLoginError(
          typeof data.error === "string"
            ? data.error
            : "Gagal masuk. Coba lagi."
        );
        return;
      }
      router.push("/generate");
      router.refresh();
    } catch {
      setLoginError("Gagal menghubungi server. Coba lagi.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-[#7b4335] px-6 py-12">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />

      <main className="relative z-10 flex w-full max-w-[400px] flex-col items-center">
        <div className="mb-10 flex w-full flex-col items-center text-center">
          <Image
            src="/monostrip-logo.png"
            alt="Monostrip"
            width={320}
            height={120}
            className="h-auto w-[min(280px,85vw)] object-contain drop-shadow-md"
            priority
          />
          <p className="font-display mt-5 text-sm font-semibold uppercase tracking-[0.35em] text-white/90">
            Photobooth
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full space-y-5 rounded-sm border border-white/15 bg-black/10 p-8 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.35)] backdrop-blur-sm"
        >
          {loginError ? (
            <div
              className="rounded-sm border border-red-200/40 bg-red-950/40 px-3 py-2 text-sm text-red-100"
              role="alert"
            >
              {loginError}
            </div>
          ) : null}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-xs font-medium uppercase tracking-wider text-white/85"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-sm border border-white/25 bg-white px-4 py-3 text-[#3d2924] shadow-inner outline-none transition-[box-shadow,border-color] placeholder:text-neutral-400 focus:border-white focus:ring-2 focus:ring-white/50"
              placeholder="user@example.com"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-xs font-medium uppercase tracking-wider text-white/85"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-sm border border-white/25 bg-white px-4 py-3 text-[#3d2924] shadow-inner outline-none transition-[box-shadow,border-color] placeholder:text-neutral-400 focus:border-white focus:ring-2 focus:ring-white/50"
              placeholder="Minimal 8 karakter"
              minLength={8}
              required
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="mt-2 w-full rounded-sm bg-white py-3.5 text-center font-semibold uppercase tracking-[0.2em] text-[#7b4335] shadow-md transition-[transform,box-shadow,opacity] hover:brightness-[1.02] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? "Memproses…" : "Masuk"}
          </button>
        </form>
      </main>
    </div>
  );
}
