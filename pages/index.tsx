import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), [])

  return (
    <>
      <>
        <div className="flex flex-col justify-center min-h-screen py-6 bg-gray-100 dark:bg-gray-900 sm:py-12">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="absolute inset-0 transform -skew-y-6 shadow-lg bg-gradient-to-r from-cyan-400 to-sky-500 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl" />
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
              {mounted && (
                <button
                  aria-label="Toggle Dark Mode"
                  className="absolute right-10 top-10 w-9 h-9 bg-gray-200 rounded-lg flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all"
                  onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                  type="button"
                >
                  {mounted && (
                    <svg
                      className="w-5 h-5 text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {resolvedTheme === "dark" ? (
                        <path
                          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        />
                      ) : (
                        <path
                          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        />
                      )}
                    </svg>
                  )}
                </button>
              )}
              <div className="max-w-md mx-auto">
                <div className="relative h-7 sm:h-8">
                  <Image
                    alt="Tailwind Play"
                    className="h-full"
                    layout="fill"
                    src="https://play.tailwindcss.com/img/logo.svg"
                  />
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="py-8 space-y-4 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
                    <p>An advanced online playground for Tailwind CSS, including support for things like:</p>
                    <ul className="space-y-2 list-disc">
                      <li className="flex items-start">
                        <span className="flex items-center h-6 sm:h-7">
                          <svg className="flex-shrink-0 w-5 h-5 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              clipRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              fillRule="evenodd"
                            />
                          </svg>
                        </span>
                        <p className="ml-2">
                          Customizing your <code className="text-sm font-bold text-gray-900">tailwind.config.js</code>{" "}
                          file
                        </p>
                      </li>
                      <li className="flex items-start">
                        <span className="flex items-center h-6 sm:h-7">
                          <svg className="flex-shrink-0 w-5 h-5 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              clipRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              fillRule="evenodd"
                            />
                          </svg>
                        </span>
                        <p className="ml-2">
                          Extracting classes with <code className="text-sm font-bold text-gray-900">@apply</code>
                        </p>
                      </li>
                      <li className="flex items-start">
                        <span className="flex items-center h-6 sm:h-7">
                          <svg className="flex-shrink-0 w-5 h-5 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              clipRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              fillRule="evenodd"
                            />
                          </svg>
                        </span>
                        <p className="ml-2">Code completion with instant preview</p>
                      </li>
                    </ul>
                    <p>
                      Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share
                      online.
                    </p>
                  </div>
                  <div className="pt-6 text-base font-bold leading-6 text-black sm:text-lg sm:leading-7">
                    <p>Want to dig deeper into Tailwind?</p>
                    <p>
                      <a
                        className="text-cyan-600 hover:text-cyan-700"
                        href="https://tailwindcss.com/docs"
                        rel="noreferrer"
                        target="_blank"
                      >
                        {" "}
                        Read the docs &rarr;{" "}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      <div className="bg-white dark:bg-black min-h-screen flex items-center justify-center">
        {mounted && (
          <button
            aria-label="Toggle Dark Mode"
            className="font-medium border border-current text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 h-12 px-8 rounded-md transition-colors duration-300"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          >
            Toggle theme
          </button>
        )}
      </div>
    </>
  )
}
