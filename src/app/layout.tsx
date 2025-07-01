import "@/app/globals.css";
import { Provider } from "@/providers/Provider";
import { i18nConfig, type Locale } from "../lib/i18next.setting";
import { loadLocaleJson } from "@/lib/load-locale-json";

// ------------------- metadata -------------------
interface Meta {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetaData({ params }: Meta) {
  const { locale } = await params;

  const json = loadLocaleJson(locale, "common");

  return {
    title: json?.meta?.title || "Dr. Fortune",
    description: json?.meta?.description || "Your fortune teller.",
  };
}

// ------------------- static params -------------------
// generateStaticParams는 i18nConfig를 참조
export async function generateStaticParams() {
  return i18nConfig.languages.map((locale) => ({ locale }));
}

// ------------------- Root Layout -------------------
interface Props {
  params: Promise<{ locale: Locale }>;
  children: React.ReactNode;
}

export default async function RootLayout({ params, children }: Props) {
  const { locale } = await params;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="w-full flex flex-col items-center mx-auto">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
