import { MonkeyLogo } from "@/components/common/MonkeyLogo";
export function AuthAside({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative flex w-full flex-col items-center justify-center bg-slate-50 px-6 py-12 sm:px-12 lg:flex-1 lg:px-16 ${className}`}
      style={{ minHeight: "30vh" }}
    >
      <div className="flex w-full max-w-lg flex-col items-center text-center">
        <MonkeyLogo className="mb-8 h-12 w-12 text-emerald-600" />
        
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl lg:text-5xl lg:leading-tight">
          "I'm in it for the technology.
          <br className="hidden sm:block" /> And maybe a lambo."
        </h1>
        
        <p className="mt-8 text-sm font-semibold tracking-widest text-emerald-600 uppercase">
          — Rule #1 of Crypto
        </p>
      </div>
    </div>
  );
}
