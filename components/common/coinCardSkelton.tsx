export const Loader = () => {
    const skeletonItems = Array.from({ length: 12 }, (_, i) => i);

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-4 w-full">
            {skeletonItems.map((item) => (
                <div key={item} className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm p-4 flex flex-col items-center gap-3 border border-zinc-200 dark:border-zinc-800 animate-pulse">
                    <div className="w-12 h-12 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                    
                    <div className="w-full flex flex-col items-center gap-1.5 mt-1">
                        <div className="h-5 w-20 bg-zinc-200 dark:bg-zinc-800 rounded-md" />
                        <div className="h-3 w-12 bg-zinc-200 dark:bg-zinc-800 rounded-md" />
                    </div>

                    <div className="flex flex-col items-center mt-1 w-full pt-3 border-t border-zinc-100 dark:border-zinc-800 gap-1.5">
                        <div className="h-5 w-16 bg-zinc-200 dark:bg-zinc-800 rounded-md" />
                        <div className="h-4 w-14 bg-zinc-200 dark:bg-zinc-800 rounded-full mt-0.5" />
                    </div>

                    <div className="w-full h-8 mt-2 bg-zinc-200 dark:bg-zinc-800 rounded-lg" />
                </div>
            ))}
        </div>
    );
}