import React from "react";
import tweetData from "../data/tweets.json";
import { Tweet } from "react-tweet";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

const LoadingSkeleton = () => (
  <div className="animate-pulse bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 rounded-xl h-full w-full flex"></div>
);

const ErrorFallback = () => (
  <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-red-50 to-pink-50 rounded-xl border border-red-100">
    <div className="text-center p-6 space-y-3">
      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
        <svg
          className="w-8 h-8 text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
          />
        </svg>
      </div>
      <p className="text-red-700 font-medium">Tweet unavailable</p>
      <p className="text-red-600 text-sm">This tweet could not be loaded</p>
    </div>
  </div>
);

const TweetWall = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [loadingStates, setLoadingStates] = React.useState({});

  const handleScroll = (event) => {
    const scrollLeft = event.target.scrollLeft;
    const width = event.target.clientWidth;
    const newIndex = Math.round(scrollLeft / width);
    setCurrentIndex(newIndex);
  };

  const handleTweetLoad = (tweetId) => {
    setLoadingStates((prev) => ({ ...prev, [tweetId]: false }));
  };

  React.useEffect(() => {
    const initialLoadingStates = {};
    tweetData.tweetIds.forEach((id) => {
      initialLoadingStates[id] = true;
    });
    setLoadingStates(initialLoadingStates);

    const timer = setTimeout(() => {
      setLoadingStates({});
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div data-theme="light" className="rounded-2xl overflow-hidden">
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 p-6">
        {tweetData.tweetIds.map((tweetId, index) => (
          <div
            key={index}
            style={{
              height: "520px",
              overflow: "hidden",
              paddingBottom: loadingStates[tweetId] ? "56px" : "0",
            }}
          >
            <div className="h-full px-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400">
              <div className="flex justify-center h-full">
                <ErrorBoundary fallback={<ErrorFallback />}>
                  {loadingStates[tweetId] ? (
                    <LoadingSkeleton />
                  ) : (
                    <Tweet
                      id={tweetId}
                      onLoad={() => handleTweetLoad(tweetId)}
                    />
                  )}
                </ErrorBoundary>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="md:hidden p-4">
        <div
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide smooth-scroll gap-4"
          onScroll={handleScroll}
          style={{ scrollBehavior: "smooth" }}
        >
          {tweetData.tweetIds.map((tweetId, index) => (
            <div
              key={index}
              className="min-w-full flex-shrink-0 snap-center bg-white rounded-xl shadow-lg border border-gray-100"
              style={{
                height: "520px",
                overflow: "hidden",
              }}
            >
              <div className="h-full p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                <div className="flex justify-center h-full">
                  <ErrorBoundary fallback={<ErrorFallback />}>
                    {loadingStates[tweetId] ? (
                      <LoadingSkeleton />
                    ) : (
                      <Tweet
                        id={tweetId}
                        className="mx-auto"
                        onLoad={() => handleTweetLoad(tweetId)}
                      />
                    )}
                  </ErrorBoundary>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-6 mb-2">
          {tweetData.tweetIds.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                index === currentIndex
                  ? "bg-black shadow-lg scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => {
                const container = document.querySelector(".snap-x");
                if (container) {
                  container.scrollTo({
                    left: index * container.clientWidth,
                    behavior: "smooth",
                  });
                }
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TweetWall;
