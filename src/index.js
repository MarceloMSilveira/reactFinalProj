//X1. Create a new React app.
//X2. Create a App.jsx component.
//X3. Create a Header.jsx component that renders a <header> element
//to show the Keeper App name in an <h1>.
//X4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.
//X5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.
//X6. Make sure that the final website is styled like the example shown here:
//https://l1pp6.csb.app/

//HINT: You will need to study the classes in teh styles.css file to appy styling.
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";

ReactDOM.render(<App />, document.getElementById("root"))