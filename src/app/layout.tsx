import "@/app/globals.css";
import { Provider } from "@/providers/Provider";
import { i18nConfig, type Locale } from "../lib/i18next.setting";

interface Props {
  params: Promise<{ locale: Locale }>;
  children: React.ReactNode;
}

// ------------------- static params -------------------
// generateStaticParams는 i18nConfig를 참조
export async function generateStaticParams() {
  return i18nConfig.languages.map((locale) => ({ locale }));
}

// ------------------- Root Layout -------------------

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
