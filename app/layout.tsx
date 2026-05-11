import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider";
import "./globals.css";
import Navigation from "./Navigation";
import AboutDev from "./about/AboutDev";

export const metadata: Metadata = {
  title: "Benjamin Smith",
  description: "Benjamin Smith Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en" className={`h-full antialiased`}>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/znb5yce.css" />
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <Provider>
          <Navigation />
          <AboutDev />
          {children}
        </Provider>
      </body>
    </html>
  );
}
