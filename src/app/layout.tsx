import "./globals.css";
import { ReactNode } from "react";
import Link from "next/link";
import { NavBar } from "@/components/nav-bar";
import { MessageSquare } from "lucide-react";
import {
  siFacebook,
  siInstagram,
  siYoutube,
  siX,
  siDiscord,
} from "simple-icons";

export const metadata = {
  title: "Spooky Rabbits Studio",
  description: "Indie Game Studio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <header className="border-b">
          <div className="container mx-auto flex h-14 items-center px-4 relative">
            <Link href="/" className="font-semibold mr-auto">
              Spooky Rabbits
            </Link>
            {/* Navbar centrée via absolute + translate */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <NavBar />
            </div>
          </div>
        </header>
        <main className="flex-1 container mx-auto px-4 py-10">{children}</main>
        <footer className="border-t py-8 text-sm text-muted-foreground">
          <div className="container mx-auto px-4 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
              <div>© {new Date().getFullYear()} Spooky Rabbits Studio</div>
              <div className="flex items-center gap-4">
                <Link
                  href="/legal/mentions-legales"
                  className="hover:text-foreground hover:underline underline-offset-4"
                >
                  Mentions légales
                </Link>
                <Link
                  href="/legal/politique-de-confidentialite"
                  className="hover:text-foreground hover:underline underline-offset-4"
                >
                  Politique de confidentialité
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <SocialIcon href="#" label="Discord" icon={siDiscord} />
              <SocialIcon href="#" label="Facebook" icon={siFacebook} />
              <SocialIcon href="#" label="X" icon={siX} />
              <SocialIcon href="#" label="YouTube" icon={siYoutube} />
              <SocialIcon href="#" label="Instagram" icon={siInstagram} />
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

function SocialIcon({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: { path: string; title: string; hex: string };
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="group rounded-md border bg-background/40 p-2 text-muted-foreground shadow-sm transition-colors hover:text-foreground hover:bg-accent focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
    >
      <svg
        role="img"
        viewBox="0 0 24 24"
        className="size-4 fill-current transition-colors"
        aria-hidden="true"
      >
        <path d={icon.path} />
      </svg>
    </Link>
  );
}
