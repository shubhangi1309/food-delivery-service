import React from "react";
import ReactDOM from "react-dom/client";

// React Element is an OBJECT equivalent to DOM elements
// when we render react element to DOM it becomes HTML element
const elem  = <span>Example of React element 1 in component </span>

const title = (<h1 className="head">
    {elem}
     React element 2
</h1>)

const TitleComponent = () => (<h1 className="head">
     TitleComponent
</h1>)

const Heading = () => {
    return (
        <div id="container">
            {title}
            <h1>first react component</h1>
            <TitleComponent></TitleComponent>
            <TitleComponent/>
            {TitleComponent()}
        </div>
    )
}

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Shubhangi knows React 🚀"
);
const root = ReactDOM.createRoot(document.getElementById("root")); //root of app

root.render(<Heading/>);