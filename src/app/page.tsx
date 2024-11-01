import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-white flex flex-col h-screen  overflow-hidden bg-[url('../../public/background_11.jpg')] bg-cover bg-center">
      <header className="px-4 lg:px-6 h-14 flex ml-auto mr-16 mt-4">
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 transition-all duration-300"
            href="#"
          >
            Find Job
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 transition-all duration-300"
            href="#"
          >
            For Employers
          </Link>
        </nav>
      </header>
      <main className="w-full flex flex-col justify-center items-center m-auto">
        <div className="flex flex-col gap-4 items-center justify-center mt-28">
          <h1 className="text-6xl font-bold tracking-tighter text-shadow_">
            Find Your Dream Job
          </h1>
          <p className="mx-auto max-w-[1000px] text-center text-xl">
            Leave your resume here and connect with top employers and discover
            opportunities that match your skills and aspirations.
          </p>
          <div className=" flex flex-col gap-2 items-center justify-center  p-2 px-6 pb-4">
            <p className="mx-auto font-semibold text-sm mt-2">For employers:</p>
            <Link href={"/choose"}>
              {/* <button className="flex justify-center items-center gap-2 bg-orange-500 w-36 h-12 rounded-lg text-lg font-semibold text-white hover:bg-orange-600 transition-all duration-700">
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
              </button> */}
              <button className="flex justify-center items-center gap-2 blob-btn">
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
                <span className="blob-btn__inner">
                  <span className="blob-btn__blobs">
                    <span className="blob-btn__blob"></span>
                    <span className="blob-btn__blob"></span>
                    <span className="blob-btn__blob"></span>
                    <span className="blob-btn__blob"></span>
                  </span>
                </span>
              </button>
            </Link>
          </div>
          <Image src="/painted_arrow.png" alt="arrow" width={60} height={60} />
        </div>
      </main>
    </div>
  );
}
