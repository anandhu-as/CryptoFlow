import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { AuthAside } from "@/components/common/AuthAside";
import { clerkAppearance } from "@/lib/clerkAppearance";
const SignInPage = () => {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col bg-white text-slate-900 lg:flex-row">
      <div className="flex flex-1 flex-col justify-center px-6 py-12 sm:px-12 lg:px-16">
        <div className="mx-auto w-full max-w-md">
          <div className="mb-8">
            <p className="text-xs font-semibold tracking-[0.25em] text-emerald-600">
              CRYPTOFLOW
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900">
              Welcome back.
            </h1>
            <p className="mt-2 text-[15px] text-slate-500">
              Sign in to reach your markets, portfolio, and live data.
            </p>
          </div>

          <ClerkLoading>
            <div className="h-[430px] w-full animate-pulse rounded-2xl border border-slate-200 bg-slate-50" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignIn appearance={clerkAppearance} />
          </ClerkLoaded>
        </div>
      </div>

      <AuthAside />
    </div>
  );
};
export default SignInPage;
