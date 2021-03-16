// @flow
import React from "react"
import App from "next/app"
import "css/tailwind.css"

// This default export is required in a new `pages/_app.js` file.
export default class BaseComponent extends App {
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}
