import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found - Niloy Chandra",
  description: "The page you're looking for doesn't exist",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="text-center space-y-8">
        {/* 404 Text */}
        <div className="space-y-4">
          <h1 className="text-9xl font-black text-white">404</h1>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-400 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Let&apos;s get you back on track.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 border border-white/20 text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </main>
  );
}
