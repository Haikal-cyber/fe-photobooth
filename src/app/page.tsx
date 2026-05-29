import Image from "next/image";
import Link from "next/link";

const HOW_IT_WORKS_STEPS = [
  "Start",
  "Select layout",
  "Capture moment",
  "Preview",
  "Print instantly",
  "Scan QR & save digitally",
] as const;

const WHY_MONOSTRIP_CARDS = [
  {
    title: "For Cafe",
    points: [
      "increase customer engagement",
      "boost social sharing",
      "unique in-store experience",
    ],
  },
  {
    title: "For Events",
    points: [
      "memorable guest experience",
      "custom branding",
      "instant souvenirs",
    ],
  },
  {
    title: "For Weddings",
    points: [
      "personalized keepsakes",
      "custom templates",
      "fun guest interaction",
    ],
  },
] as const;

const GALLERY_CAPTION_CLASS =
  "pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1A1A1A]/85 via-[#1A1A1A]/35 to-transparent px-4 pb-4 pt-16 text-[#F2F0ED]";

/** Book Free Trial → WhatsApp (081244283690). */
const BOOK_FREE_TRIAL_WHATSAPP_URL =
  "https://wa.me/6281244283690?text=Halo%20Monostrip%2C%20saya%20ingin%20book%20free%20trial.";

const FOOTER_INSTAGRAM_URL = "https://www.instagram.com/monostrip.id/";
const FOOTER_TIKTOK_URL = "https://www.tiktok.com/@monostrip.id";
const FOOTER_WHATSAPP_URL = "https://wa.me/6281244283690";
const SUPPORT_EMAIL = "monostrip.id@gmail.com";
const BUSINESS_ADDRESS =
  "Halona Village A18, Kabupaten Malang, Jawa Timur";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F2F0ED] text-[#1A1A1A]">
      <header className="relative mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-7 md:px-10 lg:px-14">
        <Link
          href="/"
          className="font-display text-xl font-semibold tracking-tight text-[#1A1A1A] md:text-2xl"
        >
          Monostrip
        </Link>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 md:flex md:max-w-[min(100vw-12rem,52rem)] md:flex-wrap md:justify-center md:gap-x-5 md:gap-y-2 lg:max-w-none lg:flex-nowrap lg:gap-x-7"
          aria-label="Utama"
        >
          <a
            href="#hero"
            className="text-[0.65rem] font-medium uppercase tracking-[0.22em] text-[#1A1A1A]/70 transition-colors hover:text-[#1A1A1A]"
          >
            Pengalaman
          </a>
          <a
            href="#hero"
            className="text-[0.65rem] font-medium uppercase tracking-[0.22em] text-[#1A1A1A]/70 transition-colors hover:text-[#1A1A1A]"
          >
            Photobooth
          </a>
          <a
            href="#product-showcase"
            className="text-[0.65rem] font-medium uppercase tracking-[0.22em] text-[#1A1A1A]/70 transition-colors hover:text-[#1A1A1A]"
          >
            Unit
          </a>
          <a
            href="#how-it-works"
            className="text-[0.65rem] font-medium uppercase tracking-[0.22em] text-[#1A1A1A]/70 transition-colors hover:text-[#1A1A1A]"
          >
            Alur
          </a>
          <a
            href="#why-monostrip"
            className="text-[0.65rem] font-medium uppercase tracking-[0.22em] text-[#1A1A1A]/70 transition-colors hover:text-[#1A1A1A]"
          >
            Nilai
          </a>
          <a
            href="#gallery"
            className="text-[0.65rem] font-medium uppercase tracking-[0.22em] text-[#1A1A1A]/70 transition-colors hover:text-[#1A1A1A]"
          >
            Galeri
          </a>
          <a
            href="#cta"
            className="text-[0.65rem] font-medium uppercase tracking-[0.22em] text-[#1A1A1A]/70 transition-colors hover:text-[#1A1A1A]"
          >
            Mulai
          </a>
        </nav>

        <Link
          href="/login"
          className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#1A1A1A] underline decoration-[#1A1A1A]/25 underline-offset-8 transition-colors hover:decoration-[#A3482E]"
        >
          Masuk
        </Link>
      </header>

      <main>
        <section
          id="hero"
          className="relative overflow-hidden"
          aria-labelledby="hero-heading"
        >
          <div className="mx-auto max-w-7xl px-6 pb-12 pt-6 md:px-10 md:pb-20 md:pt-8 lg:px-14">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-7">
                <h1
                  id="hero-heading"
                  className="mt-10 max-w-4xl font-display text-[clamp(2rem,5.2vw,3.35rem)] font-normal leading-[1.07] tracking-tight text-[#1A1A1A] md:mt-12"
                >
                  Photobooth Receipt Experience
                  <br />
                  <span className="italic font-medium text-[#1A1A1A]">
                    for Cafe &amp; Events
                  </span>
                </h1>

                <p className="mt-8 max-w-2xl text-base font-normal leading-[1.75] tracking-wide text-[#1A1A1A]/75 md:text-[1.05rem] md:leading-[1.8]">
                  Berbeda dari photobooth pada umumnya, Monostrip menggunakan
                  photobooth mini dengan konsep print berbentuk struk (receipt)
                  yang unik dan jarang ditemui. Hal ini menciptakan rasa
                  penasaran, meningkatkan daya tarik visual, serta memberikan
                  pengalaman yang berbeda bagi pengunjung.
                </p>

                <div className="mt-10 flex max-w-3xl flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <a
                    href={BOOK_FREE_TRIAL_WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#A3482E] px-6 py-3 text-center text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white transition-[filter,transform] hover:brightness-110 active:scale-[0.99] sm:flex-1 sm:px-5"
                  >
                    Try Monostrip for Your Cafe
                  </a>
                  <a
                    href={BOOK_FREE_TRIAL_WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center rounded-md border border-[#1A1A1A]/35 bg-transparent px-6 py-3 text-center text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#1A1A1A] transition-colors hover:border-[#1A1A1A] hover:bg-[#1A1A1A]/[0.04] sm:flex-1 sm:px-5"
                  >
                    Book Free Trial
                  </a>
                </div>

                <ul className="mt-6 flex max-w-3xl flex-col gap-2 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-2">
                  <li>
                    <a
                      href="mailto:hello@monostrip.id?subject=Book%20Demo%20Monostrip"
                      className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#1A1A1A]/55 underline decoration-[#1A1A1A]/20 underline-offset-[6px] transition-colors hover:text-[#A3482E] hover:decoration-[#A3482E]/40"
                    >
                      Book Demo
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:hello@monostrip.id?subject=Partnership%20Monostrip"
                      className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#1A1A1A]/55 underline decoration-[#1A1A1A]/20 underline-offset-[6px] transition-colors hover:text-[#A3482E] hover:decoration-[#A3482E]/40"
                    >
                      Partnership With Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#product-showcase"
                      className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#1A1A1A]/55 underline decoration-[#1A1A1A]/20 underline-offset-[6px] transition-colors hover:text-[#A3482E] hover:decoration-[#A3482E]/40"
                    >
                      Get Monostrip
                    </a>
                  </li>
                </ul>
              </div>

              <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
                <div className="relative aspect-square overflow-hidden rounded-3xl bg-transparent">
                  <Image
                    src="/hero_mono.png"
                    alt="Kolase hasil cetak Monostrip"
                    fill
                    priority
                    className="object-contain object-center"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="product-showcase"
          className="border-t border-[#1A1A1A]/8 bg-[#F2F0ED]"
          aria-labelledby="product-showcase-heading"
        >
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28 lg:px-14">
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.28em] text-[#A3482E]">
              Product Showcase
            </p>
            <h2
              id="product-showcase-heading"
              className="mt-4 font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-normal leading-tight tracking-tight text-[#1A1A1A]"
            >
              Unit{" "}
              <span className="italic font-medium">Monostrip</span>.
            </h2>

            <div className="mt-14 grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[#1A1A1A]/10 bg-[#E8E4DF] shadow-[0_24px_48px_-20px_rgba(0,0,0,0.18)]">
                <Image
                  src="/monostrip_barang.png"
                  alt="Ilustrasi unit Monostrip — mesin photobooth struk minimalis"
                  fill
                  className="object-contain object-center p-10 md:p-14"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div>
                <h3 className="font-display text-2xl font-medium tracking-tight text-[#1A1A1A] md:text-[1.65rem]">
                  Monostrip Device
                </h3>
                <p className="mt-5 max-w-lg text-sm leading-[1.8] tracking-wide text-[#1A1A1A]/72">
                Monostrip adalah photobooth modern berbasis thermal printing yang dirancang untuk menghadirkan pengalaman foto instan dengan konsep minimalis dan aesthetic.
                </p>

                <div className="mt-10 grid gap-10 sm:grid-cols-2 sm:gap-8">
                  <div>
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#1A1A1A]">
                      Designed for
                    </p>
                    <ul className="mt-4 space-y-2.5 text-sm leading-relaxed tracking-wide text-[#1A1A1A]/75">
                      <li className="border-l-2 border-[#A3482E]/50 pl-3">
                        cafes
                      </li>
                      <li className="border-l-2 border-[#A3482E]/50 pl-3">
                        events
                      </li>
                      <li className="border-l-2 border-[#A3482E]/50 pl-3">
                        weddings
                      </li>
                      <li className="border-l-2 border-[#A3482E]/50 pl-3">
                        brand activations
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#1A1A1A]">
                      Features
                    </p>
                    <ul className="mt-4 space-y-2.5 text-sm leading-relaxed tracking-wide text-[#1A1A1A]/75">
                      <li className="border-l-2 border-[#1A1A1A]/15 pl-3">
                        instant print
                      </li>
                      <li className="border-l-2 border-[#1A1A1A]/15 pl-3">
                        QR gallery
                      </li>
                      <li className="border-l-2 border-[#1A1A1A]/15 pl-3">
                        custom template
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="border-t border-[#1A1A1A]/8 bg-[#EDEAE6]"
          aria-labelledby="how-it-works-heading"
        >
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28 lg:px-14">
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.28em] text-[#A3482E]">
              How It Works
            </p>
            <h2
              id="how-it-works-heading"
              className="mt-4 max-w-2xl font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-normal leading-tight tracking-tight text-[#1A1A1A]"
            >
              Dari memilih mode hingga hasil cetak di tangan —{" "}
              <span className="italic font-medium">semuanya dirancang cepat</span> dan mudah.
            </h2>

            <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-10">
              {HOW_IT_WORKS_STEPS.map((label, index) => (
                <li
                  key={label}
                  className="group relative flex gap-5 border-l-2 border-[#A3482E]/35 pl-5 transition-colors hover:border-[#A3482E]"
                >
                  <span
                    className="font-display text-[2.75rem] font-normal leading-none tabular-nums text-[#A3482E]/25 transition-colors group-hover:text-[#A3482E]/45"
                    aria-hidden
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 pt-1">
                    <p className="font-display text-lg font-medium leading-snug tracking-tight text-[#1A1A1A] md:text-xl">
                      <span className="sr-only">
                        Langkah {index + 1}:{" "}
                      </span>
                      {label}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="why-monostrip"
          className="border-t border-[#1A1A1A]/8 bg-[#F2F0ED]"
          aria-labelledby="why-monostrip-heading"
        >
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28 lg:px-14">
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.28em] text-[#A3482E]">
              Why Monostrip
            </p>
            <h2
              id="why-monostrip-heading"
              className="mt-4 max-w-2xl font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-normal leading-tight tracking-tight text-[#1A1A1A]"
            >
              Nilai yang sama untuk{" "}
              <span className="italic font-medium">setiap ruang</span> — dari
              kafe hingga resepsi.
            </h2>

            <div className="mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
              {WHY_MONOSTRIP_CARDS.map((card) => (
                <article
                  key={card.title}
                  className="flex flex-col rounded-2xl border border-[#1A1A1A]/10 bg-[#E8E4DF]/60 p-8 shadow-[0_20px_40px_-24px_rgba(0,0,0,0.2)] transition-[border-color,box-shadow] hover:border-[#A3482E]/35 hover:shadow-[0_24px_48px_-20px_rgba(163,72,46,0.12)]"
                >
                  <h3 className="font-display text-xl font-medium tracking-tight text-[#1A1A1A] md:text-[1.35rem]">
                    {card.title}
                  </h3>
                  <ul className="mt-6 flex flex-1 flex-col gap-3.5">
                    {card.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-relaxed tracking-wide text-[#1A1A1A]/78"
                      >
                        <span
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#A3482E]"
                          aria-hidden
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="gallery"
          className="border-t border-[#1A1A1A]/8 bg-[#EDEAE6]"
          aria-labelledby="gallery-heading"
        >
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28 lg:px-14">
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.28em] text-[#A3482E]">
              Gallery / Social Proof
            </p>
            <h2
              id="gallery-heading"
              className="mt-4 max-w-3xl font-display text-[clamp(1.85rem,3.8vw,2.85rem)] font-normal leading-tight tracking-tight text-[#1A1A1A]"
            >
              Trusted by{" "}
              <span className="italic font-medium">cafes &amp; events</span>
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed tracking-wide text-[#1A1A1A]/68">
              Bukti visual dari cetakan, tamu, instalasi di kafe, hingga sorotan
              sosial — karena kepercayaan tumbuh dari apa yang bisa dilihat.
            </p>

            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:auto-rows-fr">
              <figure className="relative isolate aspect-[4/5] overflow-hidden rounded-2xl border border-[#1A1A1A]/10 sm:col-span-2 sm:aspect-[21/9] lg:col-span-7 lg:row-span-2 lg:aspect-auto lg:min-h-[min(32rem,70vh)]">
                <Image
                  src="/moment.png"
                  alt="Tamu menggunakan photobooth Monostrip"
                  fill
                  className="object-cover object-center grayscale contrast-[1.05]"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
                <figcaption className={GALLERY_CAPTION_CLASS}>
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[#F2F0ED]/75">
                    Social proof
                  </p>
                  <p className="mt-1.5 font-display text-lg font-medium leading-snug md:text-xl">
                    Foto orang &amp; momen bersama Monostrip
                  </p>
                </figcaption>
              </figure>

              <figure className="relative isolate aspect-video w-full overflow-hidden rounded-2xl border border-[#1A1A1A]/10 bg-[#262624] lg:col-span-5 lg:row-span-2 lg:aspect-auto lg:min-h-[min(32rem,70vh)]">
                <div className="absolute inset-0 grid grid-cols-3 gap-2 p-2">
                  <div className="relative overflow-hidden rounded-xl border border-[#F2F0ED]/15 bg-[#121211]">
                    <Image
                      src="/IMG_8575.jpeg"
                      alt="Konten viral Monostrip di TikTok"
                      fill
                      className="object-cover object-center grayscale contrast-[1.05]"
                      sizes="(max-width: 1024px) 33vw, 14vw"
                    />
                  </div>
                  <div className="relative overflow-hidden rounded-xl border border-[#F2F0ED]/15 bg-[#121211]">
                    <Image
                      src="/IMG_8577.jpeg"
                      alt="Konten Monostrip di media sosial"
                      fill
                      className="object-cover object-center grayscale contrast-[1.05]"
                      sizes="(max-width: 1024px) 33vw, 14vw"
                    />
                  </div>
                  <div className="relative overflow-hidden rounded-xl border border-[#F2F0ED]/15 bg-[#121211]">
                    <Image
                      src="/IMG_8578.jpeg"
                      alt="Konten Monostrip bersama pengunjung"
                      fill
                      className="object-cover object-center grayscale contrast-[1.05]"
                      sizes="(max-width: 1024px) 33vw, 14vw"
                    />
                  </div>
                </div>
                <figcaption className={GALLERY_CAPTION_CLASS}>
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[#F2F0ED]/75">
                    Sorotan sosial
                  </p>
                  <p className="mt-1.5 font-display text-lg font-medium leading-snug md:text-xl">
                    TikTok &amp; konten viral
                  </p>
                </figcaption>
              </figure>

              <figure className="relative isolate aspect-[4/3] overflow-hidden rounded-2xl border border-[#1A1A1A]/10 lg:col-span-6 lg:aspect-auto lg:min-h-[11.5rem]">
                <Image
                  src="/IMG_8402.jpeg"
                  alt="Ilustrasi hasil cetak struk Monostrip"
                  fill
                  className="object-cover object-[center_60%] grayscale contrast-[1.05]"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <figcaption className={GALLERY_CAPTION_CLASS}>
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[#F2F0ED]/75">
                    Hasil print
                  </p>
                  <p className="mt-1.5 font-display text-lg font-medium leading-snug">
                    Struk fotografi instan
                  </p>
                </figcaption>
              </figure>

              <figure className="relative isolate aspect-[4/3] overflow-hidden rounded-2xl border border-[#1A1A1A]/10 bg-[#E8E4DF] lg:col-span-6 lg:aspect-auto lg:min-h-[11.5rem]">
                <Image
                  src="/IMG_8564.jpeg"
                  alt="Unit Monostrip di ruang kafe"
                  fill
                  className="object-cover object-[center_60%] grayscale contrast-[1.05]"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <figcaption className={GALLERY_CAPTION_CLASS}>
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[#F2F0ED]/75">
                    Setup di cafe
                  </p>
                  <p className="mt-1.5 font-display text-lg font-medium leading-snug">
                    Hadir tanpa mengganggu interior
                  </p>
                </figcaption>
              </figure>

              
            </div>
          </div>
        </section>

        <section
          id="cta"
          className="mx-4 mt-4 rounded-3xl bg-[#262624] px-8 py-20 text-center md:mx-8 md:px-16 md:py-28 lg:mx-12"
        >
          <h2 className="mx-auto max-w-2xl font-display text-[clamp(1.75rem,4vw,2.75rem)] font-normal leading-snug tracking-tight text-[#F2F0ED]">
            Ready to bring Monostrip to your{" "}
            <span className="italic font-medium text-[#F2F0ED]">
              cafe or event?
            </span>
          </h2>
          <div className="mx-auto mt-10 flex justify-center">
            <a
              href={BOOK_FREE_TRIAL_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#A3482E] px-7 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white transition-[filter,transform] hover:brightness-110 active:scale-[0.99] sm:min-w-[12rem]"
            >
              Book Free Trial
              <span aria-hidden className="text-base leading-none">
                →
              </span>
            </a>
          </div>
        </section>

        <footer className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-14">
          <div className="border-t border-[#1A1A1A]/10 pt-10">
            <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-12">
              <p className="font-display text-lg font-semibold text-[#1A1A1A]">
                Monostrip
              </p>
              <div className="max-w-sm">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#1A1A1A]/55">
                  Kontak support
                </p>
                <ul className="mt-3 space-y-3 text-sm leading-relaxed tracking-wide text-[#1A1A1A]/78">
                  <li>
                    <span className="text-[#1A1A1A]/50">Email: </span>
                    <a
                      href={`mailto:${SUPPORT_EMAIL}`}
                      className="font-medium text-[#1A1A1A] underline decoration-[#1A1A1A]/20 underline-offset-4 transition-colors hover:text-[#A3482E] hover:decoration-[#A3482E]/40"
                    >
                      {SUPPORT_EMAIL}
                    </a>
                  </li>
                  <li>
                    <span className="text-[#1A1A1A]/50">Alamat: </span>
                    <span className="text-[#1A1A1A]/85">
                      {BUSINESS_ADDRESS}
                    </span>
                  </li>
                </ul>
              </div>
              <nav aria-label="Sosial dan kontak">
                <ul className="flex flex-col gap-3 text-sm tracking-wide sm:flex-row sm:flex-wrap sm:gap-x-10 sm:gap-y-3">
                  <li>
                    <a
                      href={FOOTER_INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1A1A1A] underline decoration-[#1A1A1A]/20 underline-offset-4 transition-colors hover:text-[#A3482E] hover:decoration-[#A3482E]/40"
                    >
                      Instagram:{" "}
                      <span className="font-medium">monostrip.id</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={FOOTER_TIKTOK_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1A1A1A] underline decoration-[#1A1A1A]/20 underline-offset-4 transition-colors hover:text-[#A3482E] hover:decoration-[#A3482E]/40"
                    >
                      TikTok:{" "}
                      <span className="font-medium">monostrip.id</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={FOOTER_WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1A1A1A] underline decoration-[#1A1A1A]/20 underline-offset-4 transition-colors hover:text-[#A3482E] hover:decoration-[#A3482E]/40"
                    >
                      WhatsApp:{" "}
                      <span className="font-medium tabular-nums">
                        081244283690
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <p className="mt-10 text-xs tracking-wide text-[#1A1A1A]/45">
              © {new Date().getFullYear()} Monostrip Photobooth
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
