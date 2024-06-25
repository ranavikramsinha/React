import React from "react"
import ReactDOM from "react-dom/client"


//* ReactElement(Object) => it is creating an object while it is rendering onto the dom it converts itself into that HTML(Browser understands) and put it up into the dom

const heading = React.createElement("h1", {id: "heading"}, "Radha Krishna")
console.log(heading)

//* JSX => is not HTML in JS (HTML-like or XML-like syntax)
//* JSX => transpiled before it reaches the JS - Parcel - Babel
//* JSX => React.createElement => ReactElement-JS(Object) => HTMLElement(render)

const jsxHeading = <h1 id="heading">Hare Krishna Hare Rama</h1>
console.log(jsxHeading)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(jsxHeading)