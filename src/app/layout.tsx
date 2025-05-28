import "@/shared/styles/globals.css"

import { type Metadata } from "next";

import { ThemeProvider, TRPCReactProvider } from "@/shared/providers";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const metadata: Metadata = {
  title: "Dead Artists",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="h-screen overflow-hidden"
    >
      <body className="h-full">
        <TRPCReactProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
