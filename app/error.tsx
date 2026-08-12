"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
      <h2 className="text-2xl font-bold text-white">Something went wrong!</h2>
      <p className="text-gray-400">{error.message}</p>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        className="px-4 py-2 bg-aurora-purple text-white rounded-lg hover:bg-aurora-purple/80 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
