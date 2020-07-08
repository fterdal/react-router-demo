// You do not need to edit this file!

// The regenerator runtime allows us to use async await, even in browsers that
// do not support it. For more details, see:
// https://babeljs.io/docs/en/babel-polyfill#docsNav, and
// https://github.com/tc39/ecmascript-asyncawait
import "core-js/stable"
import "regenerator-runtime/runtime"

import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import Root from "./components/Root"

const App = () => {
  return (
    <Provider>
      <Root />
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById("app"))
