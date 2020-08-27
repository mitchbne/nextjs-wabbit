import React, { Fragment } from "react"
import Head from "next/head"

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Next-WabbitJS</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <div className="flex flex-col bg-gray-900 h-screen w-screen items-center justify-center p-20">
        <div className="w-full md:w-1/2 ">
          <img alt="logo" className="mx-auto" src="/logo.svg" />
          <p className="text-center text-orange-600 text-3xl mt-16">Welcome to NextJS-Wabbit!</p>
          <a className="text-white block w-full text-center text-lg" href="https://github.com/mitchbne/" rel="noopener noreferrer" target="_blank">@mitchbne</a>
        </div>
      </div>
    </Fragment>
  )
}
