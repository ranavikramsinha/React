import React from "react";
import ReactDOM from "react-dom/client";

//* ReactElement(Object) => it is creating an object while it is rendering onto the dom it converts itself into that HTML(Browser understands) and put it up into the dom

// const heading = React.createElement("h1", { id: "heading" }, "Radha Krishna");
// console.log(heading);

//* JSX => is not HTML in JS (HTML-like or XML-like syntax)
//* JSX => transpiled before it reaches the JS - Parcel - Babel
//* JSX (transpiled by Babel) => React.createElement => ReactElement => JS Object => HTML Element(render)

const jsxHeading = (
  <h1 className="head" tabIndex="1">
    Hare Krishna Hare Rama
  </h1>
);
// const jsxHeading = (<h1 className="head" tabIndex="1">
//     Hare Krishna Hare Rama
//     </h1>)
// console.log(jsxHeading);

//* React Functional Component

const HeadingComponent1 = () => (
  <h1 className="head">React Functional Component1</h1>
);

const HeadingComponent2 = () => {
  return <h1 className="head">React Functional Component2</h1>;
};

const element = <span>=&gt; </span>;

const Title = () => (
  <h1 tabIndex="1">
    {element}
    Hare Krishna Hare Rama
  </h1>
);

const title = <h1 tabIndex="1">Hare Krishna Hare Rama</h1>;

const number = 7;

//* Component Compositions
const HeadingComponent3 = () => (
  <div id="container">
    <Title />
    <Title></Title>
    {Title()}
    {12345}
    <h1 className="head">React Functional Component3</h1>
    <h2>{number}</h2>
    <h2>{3 + 6}</h2>
    <h2>{console.log("Rana Vikram Sinha")}</h2>
    {title}
  </div>
);

//* Note => <Title>, <Title></Title> and {Title()}, these 3 are the same thing

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent3 />);
