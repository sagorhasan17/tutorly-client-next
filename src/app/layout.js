import ReactToastContainer from "@/components/ReactToastContainer";
import NextThemeProvider from "@/providers/NextThemeProvider";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});



export const metadata = {
  title: "Tutorly",
  description: "Tutorly helps students connect with expert mentors and enjoy a flexible, modern learning experience.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.className} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <NextThemeProvider>
          {children}
        <ReactToastContainer />
        </NextThemeProvider>
      </body>
    </html>
  );
}
