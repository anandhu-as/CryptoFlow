import { SignUp, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { AuthAside } from "@/components/AuthAside";
import { clerkAppearance } from "@/lib/clerkAppearance";

export default function SignUpPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col bg-white text-slate-900 lg:flex-row">

      <AuthAside className="order-last lg:order-first" />
      <div className="flex flex-1 flex-col justify-center px-6 py-12 sm:px-12 lg:px-16">
        <div className="mx-auto w-full max-w-md">
          <div className="mb-8">
            <p className="text-xs font-semibold tracking-[0.25em] text-emerald-600">
              CRYPTOFLOW
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900">
              Open your account.
            </h1>
            <p className="mt-2 text-[15px] text-slate-500">
              Track 200+ assets in real time. Set up takes under a minute.
            </p>
          </div>

          <ClerkLoading>
            <div className="h-[480px] w-full animate-pulse rounded-2xl border border-slate-200 bg-slate-50" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignUp appearance={clerkAppearance} />
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}
