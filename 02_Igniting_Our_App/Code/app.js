import React from "react"
import ReactDOM from "react-dom/client"

// const heading1 = React.createElement("h1", {id: "heading1"}, "Hello World!");

// console.log(heading1) //* object

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading1);

/**
 *
 *   <div id="parent">
        <div id="child1">
            <h1>I'm h1 tag</h1>
            <h2>I'm h2 tag</h2>
        </div>
        <div id="child2">
            <h1>I'm h1 tag</h1>
            <h2>I'm h2 tag</h2>
        </div>
    </div>
 */

//* ReactElement(Object) => it is creating an object while it is rendering onto the dom it converts itself into that HTML(Browser understands) and put it up into the dom

const parent = React.createElement("div",{id: "parent"},[
    React.createElement("div",{id: "child1"},[
        React.createElement("h1",{}, "I'm h1 tag"),
        React.createElement("h2",{}, "I'm h2 tag"),
    ]),
    React.createElement("div",{id: "child2"},[
        React.createElement("h1",{}, "I'm h1 tag"),
        React.createElement("h2",{}, "I'm h2 tag"),
    ]),
]);

console.log(parent); //* object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);