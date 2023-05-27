import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import "@/app/globals.css";
import { Providers } from "@/app/providers";

export const metadata = {
  title: "Flight Filter",
  description: "Filter your flights with ease",
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;

  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </head>
      <body>
        <Providers>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
