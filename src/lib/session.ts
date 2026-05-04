/** Cookie HttpOnly: JWT dari Crafix (`accessToken`). */
export const MONOSTRIP_ACCESS_TOKEN_COOKIE = "monostrip_access_token";

/** Cookie HttpOnly: JSON user `{ id, email, name }` dari respons login (untuk UI & konsistensi dengan backend). */
export const MONOSTRIP_USER_COOKIE = "monostrip_user";

/** Umur cookie selaras dengan JWT Crafix (7 hari). */
export const MONOSTRIP_AUTH_MAX_AGE = 60 * 60 * 24 * 7;

export function authCookieBaseOptions() {
  return {
    path: "/",
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
  };
}
