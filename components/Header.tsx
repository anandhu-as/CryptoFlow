import Link from 'next/link';
import { MonkeyLogo } from '@/components/MonkeyLogo';
import { UserButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';
import { Bookmark } from "lucide-react";
export async function Header() {
  const user = await currentUser();

  const displayName = user
    ? user.firstName || user.username || "danny"
    : "";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/40">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105 shrink-0">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 shrink-0">
            <MonkeyLogo className="h-6 w-6" />
          </div>
          <span className="font-cursive font-bold text-xl sm:text-2xl tracking-tight bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent pt-1 hidden xs:inline-block sm:inline-block">
            CryptoFlow
          </span>
        </Link>
        <nav className="flex items-center gap-2 sm:gap-6 text-sm font-medium">
          {!user ? (
            <>
              <Link href="/sign-in" className="transition-all hover:text-primary text-muted-foreground hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] hidden sm:inline-block">
                Sign In
              </Link>
              <Link
                href="/sign-up"
                className="group relative inline-flex h-8 sm:h-9 items-center justify-center overflow-hidden rounded-full bg-primary px-4 sm:px-6 text-xs sm:text-sm font-medium text-primary-foreground shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(var(--primary),0.5)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:animate-shimmer"></span>
                <span className="relative z-10">Get Started</span>
              </Link>
            </>
          ) : (

            <div className="flex items-center gap-4">
              <Link
                href="/watchlist"
                className="hidden sm:inline-flex items-center gap-2 text-muted-foreground font-medium transition-colors hover:text-primary"
              >

                <span>Watchlist</span>
                <Bookmark className="h-4 w-4" />
              </Link>
              <span className="hidden sm:flex text-muted-foreground font-medium items-center gap-2 text-base">
                <span className="text-foreground">{displayName}</span> 👋
              </span>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-9 h-9 border border-primary/20 hover:border-primary/50 transition-colors"
                  }
                }}
              />
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

