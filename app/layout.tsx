import type { Metadata } from "next";
import {Poppins } from "next/font/google";
import "./globals.css";
import { auth } from "@/auth";
import {SessionProvider} from "next-auth/react"
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "sonner";

const poppins=Poppins({
  subsets:["latin"],
  weight:["100","200","300","400","500","600","700","800","900"],

})


export const metadata: Metadata = {
  title: "CodeSphere",
  description: "An AI powered coding platform",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session=await auth()
  return (
    <SessionProvider session={session}>
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} antialiased`}
      >
        <ThemeProvider 
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange>
          <Toaster/>
          
        </ThemeProvider>
        {children}
      </body>
    </html>
    </SessionProvider>
  );
}
