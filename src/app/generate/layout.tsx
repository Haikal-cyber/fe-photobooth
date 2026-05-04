import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kode sesi · Monostrip Photobooth",
  description: "Generate kode photobooth",
};

export default function GenerateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
