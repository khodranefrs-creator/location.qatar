import Link from "next/link";
import { lang } from "next/root-params";
import { dictionaries } from "@/lib/dictionaries";
import { Container } from "@/components/ui";

export default async function NotFound() {
  const locale = ((await lang()) === "en" ? "en" : "ar") as "ar" | "en";
  const dict = dictionaries[locale];
  const nf = dict.notFound;

  return (
    <div className="flex min-h-[70vh] items-center bg-paper pt-16">
      <Container className="text-center">
        <p className="text-7xl font-semibold text-gold md:text-9xl">404</p>
        <h1 className={`mt-6 text-3xl font-semibold text-ink md:text-5xl ${locale === "ar" ? "arabic" : ""}`}>
          {nf.title}
        </h1>
        <p className={`mx-auto mt-4 max-w-md text-lg text-stone ${locale === "ar" ? "arabic" : ""}`}>{nf.desc}</p>
        <Link
          href={`/${locale}`}
          className="mt-10 inline-flex items-center justify-center gap-2 bg-ink px-8 py-4 text-sm font-medium text-mist transition-colors hover:bg-gold hover:text-ink"
        >
          {nf.home}
        </Link>
      </Container>
    </div>
  );
}
