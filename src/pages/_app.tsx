import { Fragment } from "react"
import { AppProps } from "next/app"
import Head from "next/head"
import "css/tailwind.css"

const PageLayouts = {}

function LayoutWrapper(props: AppProps["pageProps"]) {
  const layout = props.children.type.layout
  // @ts-ignore
  const Layout = PageLayouts[layout as string] || Fragment
  const pageProps = typeof Layout === "symbol" ? {} : props
  return <Layout {...pageProps}>{props.children}</Layout>
}

export default function MyApp({ pageProps, Component }: AppProps) {
  return (
    <>
      <Head>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <LayoutWrapper {...pageProps}>
        <Component {...pageProps} />
      </LayoutWrapper>
    </>
  )
}
