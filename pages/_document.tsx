import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document"

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link as="font" crossOrigin="anonymous" href="/fonts/inter-var-latin.woff2" rel="preload" type="font/woff2" />
        </Head>
        <body className="text-gray-900 bg-white dark:bg-gray-900 dark:text-gray-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
