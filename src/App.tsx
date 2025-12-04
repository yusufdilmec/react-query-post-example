import { usePosts } from "./hooks/usePosts";
import PostCard from "./components/PostCard";
import React, { useEffect, useRef } from "react";
function App() {
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = usePosts();

  const observerTarget = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget, fetchNextPage, hasNextPage]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            React Query <span className="text-blue-600">Feed</span>
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Otomatik Sonsuz Kaydırma (Infinite Scroll)
          </p>
        </div>

        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="h-80 bg-gray-200 rounded-2xl animate-pulse"
              ></div>
            ))}
          </div>
        )}

        {isError && (
          <div className="text-red-500 text-center">Hata oluştu :(</div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.pages.map((group, i) => (
            <React.Fragment key={i}>
              {group.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </React.Fragment>
          ))}
        </div>

        <div
          ref={observerTarget}
          className="mt-8 text-center h-10 flex justify-center items-center"
        >
          {isFetchingNextPage && (
            <div className="flex items-center text-blue-600 font-semibold">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Yükleniyor...
            </div>
          )}
          {!hasNextPage && !isLoading && (
            <p className="text-gray-400">Tüm içerikleri gördünüz 🎉</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
