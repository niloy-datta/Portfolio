"use client";

export default function GlobalError({
  _error,
  reset,
}: {
  _error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="bg-black text-white flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-3xl font-bold mb-4">Something went wrong!</h2>
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
