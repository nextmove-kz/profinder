import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen justify-center items-center overflow-hidden w-screen">
      <header className="absolute top-0 right-0 px-4 lg:px-6 h-14 flex">
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 transition-all duration-300"
            href="#"
          >
            Find Jobs
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 transition-all duration-300"
            href="#"
          >
            For Employers
          </Link>
        </nav>
      </header>
      <main className="w-full">
        <div className="flex flex-col gap-10 items-center justify-center">
          <h1 className="text-6xl font-bold tracking-tighter">
            Find Your Dream Job
          </h1>
          <p className="mx-auto max-w-[1000px] text-gray-500 text-xl">
            Connect with top employers and discover opportunities that match
            your skills and aspirations.
          </p>
          <button className="flex justify-center items-center gap-2 bg-orange-500 w-36 h-12 rounded-lg text-lg font-semibold text-white hover:bg-orange-600 transition-all duration-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              <rect width="20" height="14" x="2" y="6" rx="2" />
            </svg>
            Profinder
          </button>
        </div>
      </main>
    </div>
  );
}
