import { MonkeyLogo } from "@/components/common/MonkeyLogo";

export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-950">
            <div className="animate-spin">
                <MonkeyLogo className="h-16 w-16" />
            </div>
        </div>
    );
}
