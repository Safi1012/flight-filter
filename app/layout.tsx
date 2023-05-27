import "@/app/globals.css";
import { Providers } from "@/app/providers";

export const metadata = {
  title: "Flight Filter",
  description: "Filter your flights with ease",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
