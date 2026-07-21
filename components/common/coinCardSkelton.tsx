export const Loader = () => {
  const skeletonItems = Array.from({ length: 12 }, (_, i) => i);

  return (
    <div className="flex flex-col gap-6 p-4 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skeletonItems.map((item) => (
          <div
            key={item}
            className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm p-4 flex flex-col items-center gap-2 border border-zinc-200/80 dark:border-zinc-800 animate-pulse"
          >
            <div className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800" />

            <div className="text-center mt-1 w-full flex flex-col items-center">
              <div className="h-5 w-20 bg-zinc-200 dark:bg-zinc-800 rounded-md" />
              <div className="h-3 w-12 bg-zinc-200 dark:bg-zinc-800 rounded-md mt-1.5" />
            </div>

            <div className="flex flex-col items-center w-full pt-2 mt-1 border-t border-zinc-100 dark:border-zinc-800">
              <div className="h-5 w-16 bg-zinc-200 dark:bg-zinc-800 rounded-md" />
              <div className="h-4 w-12 bg-zinc-200 dark:bg-zinc-800 rounded-md mt-1" />
            </div>

            <div className="w-full h-[28px] mt-2 bg-zinc-200 dark:bg-zinc-800 rounded-xl" />
          </div>
        ))}
      </div>
    </div>
  );
};
