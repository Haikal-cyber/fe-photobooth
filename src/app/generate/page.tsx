"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import type {
  CrafixUser,
  GenerateCodeResponse,
  UserCodeItem,
} from "@/lib/crafix-api";

export default function GeneratePage() {
  const router = useRouter();
  const [user, setUser] = useState<CrafixUser | null>(null);
  const [generated, setGenerated] = useState<GenerateCodeResponse | null>(null);
  const [userCodes, setUserCodes] = useState<UserCodeItem[]>([]);
  const [listLoading, setListLoading] = useState(false);
  const [generateLoading, setGenerateLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const parseError = useCallback(async (res: Response) => {
    try {
      const j = (await res.json()) as { error?: string };
      if (typeof j.error === "string") return j.error;
    } catch {
      /* ignore */
    }
    return res.statusText || `Error ${res.status}`;
  }, []);

  const fetchUserCodes = useCallback(
    async (userId: string) => {
      setListLoading(true);
      try {
        const res = await fetch(`/api/codes/user/${userId}`);
        if (!res.ok) {
          setError(await parseError(res));
          return;
        }
        const data = (await res.json()) as UserCodeItem[];
        setUserCodes(data);
      } catch {
        setError("Gagal menghubungi server. Coba lagi.");
      } finally {
        setListLoading(false);
      }
    },
    [parseError]
  );

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        setListLoading(true);
        const res = await fetch("/api/auth/session");
        const data = (await res.json()) as { user: CrafixUser | null };
        if (cancelled) return;
        setUser(data.user);
        if (data.user?.id) {
          const codesRes = await fetch(`/api/codes/user/${data.user.id}`);
          if (!codesRes.ok) {
            setError(await parseError(codesRes));
            return;
          }
          const codesData = (await codesRes.json()) as UserCodeItem[];
          setUserCodes(codesData);
        }
      } catch {
        if (!cancelled) {
          setError("Gagal menghubungi server. Coba lagi.");
        }
      } finally {
        if (!cancelled) {
          setListLoading(false);
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [parseError]);

  async function handleGenerate() {
    setError(null);
    setGenerateLoading(true);
    try {
      const res = await fetch("/api/codes/generate");
      if (!res.ok) {
        setError(await parseError(res));
        return;
      }
      const data = (await res.json()) as GenerateCodeResponse;
      setGenerated(data);
      if (user?.id) {
        void fetchUserCodes(user.id);
      }
    } catch {
      setError("Gagal menghubungi server. Coba lagi.");
    } finally {
      setGenerateLoading(false);
    }
  }

  async function handleLogout() {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } catch {
      /* tetap arahkan ke login */
    }
    router.push("/");
    router.refresh();
  }

  return (
    <div className="relative flex min-h-screen flex-col bg-[#7b4335] px-6 py-10">
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />

      <header className="relative z-10 mx-auto flex w-full max-w-2xl flex-wrap items-center justify-between gap-4">
        <Link href="/generate" className="flex items-center gap-3">
          <Image
            src="/monostrip-logo.png"
            alt="Monostrip"
            width={160}
            height={56}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>
        <div className="flex flex-wrap items-center gap-4">
          {user ? (
            <p className="text-right text-sm text-white/85">
              <span className="text-white/60">Halo, </span>
              <span className="font-medium text-white">{user.name}</span>
            </p>
          ) : null}
          <button
            type="button"
            onClick={handleLogout}
            className="text-xs font-medium uppercase tracking-wider text-white/80 underline-offset-4 hover:text-white hover:underline"
          >
            Keluar
          </button>
        </div>
      </header>

      <main className="relative z-10 mx-auto mt-10 flex w-full max-w-2xl flex-1 flex-col gap-8 pb-12">
        <div>
          <h1 className="font-display text-2xl font-semibold tracking-wide text-white md:text-3xl">
            Kode sesi
          </h1>
          <p className="mt-2 max-w-lg text-sm text-white/75">
            Buat kode baru untuk tamu photobooth.
          </p>
        </div>

        {error ? (
          <div
            className="rounded-sm border border-red-200/40 bg-red-950/40 px-4 py-3 text-sm text-red-100"
            role="alert"
          >
            {error}
          </div>
        ) : null}

        <section className="rounded-sm border border-white/15 bg-black/10 p-6 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.35)] backdrop-blur-sm md:p-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/85">
            Generate kode
          </h2>

          <button
            type="button"
            onClick={handleGenerate}
            disabled={generateLoading}
            className="mt-6 w-full rounded-sm bg-white py-3.5 text-center text-sm font-semibold uppercase tracking-[0.15em] text-[#7b4335] shadow-md transition-[transform,opacity] hover:brightness-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {generateLoading ? "Memuat…" : "Generate kode baru"}
          </button>

          {generated ? (
            <div className="mt-6 rounded-sm border border-white/20 bg-white/95 p-5 text-[#3d2924]">
              <p className="text-xs font-medium uppercase tracking-wider text-[#7b4335]/80">
                Kode
              </p>
              <p className="font-display mt-1 text-4xl font-bold tracking-widest">
                {generated.code}
              </p>
              <p className="mt-3 text-sm text-neutral-600">
                Maks. pemakaian:{" "}
                <span className="font-semibold text-[#3d2924]">
                  {generated.maxUsage}
                </span>
              </p>
            </div>
          ) : null}
        </section>

        <section className="rounded-sm border border-white/15 bg-black/10 p-6 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.35)] backdrop-blur-sm md:p-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/85">
            List code
          </h2>
          <p className="mt-2 text-sm text-white/70">
            Menampilkan kode dari akun yang sedang login.
          </p>

          <div className="mt-5 overflow-x-auto rounded-sm border border-white/15 bg-white/95">
            <table className="min-w-full text-left text-sm text-[#3d2924]">
              <thead className="bg-[#efe3dd] text-xs uppercase tracking-wider text-[#7b4335]">
                <tr>
                  <th className="px-4 py-3">Code</th>
                  <th className="px-4 py-3">Usage</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Created At</th>
                </tr>
              </thead>
              <tbody>
                {listLoading ? (
                  <tr>
                    <td className="px-4 py-4 text-neutral-600" colSpan={4}>
                      Memuat data...
                    </td>
                  </tr>
                ) : userCodes.length === 0 ? (
                  <tr>
                    <td className="px-4 py-4 text-neutral-600" colSpan={4}>
                      Belum ada code.
                    </td>
                  </tr>
                ) : (
                  userCodes.map((item) => (
                    <tr key={item.id} className="border-t border-neutral-200/90">
                      <td className="px-4 py-3 font-semibold tracking-wide">
                        {item.code}
                      </td>
                      <td className="px-4 py-3">
                        {item.usageCount}/{item.maxUsage}
                      </td>
                      <td className="px-4 py-3">
                        {item.isActive ? "Active" : "Inactive"}
                      </td>
                      <td className="px-4 py-3 text-neutral-700">
                        {new Date(item.createdAt).toLocaleString("id-ID")}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
