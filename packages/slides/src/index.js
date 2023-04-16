import React from "react";
import ReactDOM from "react-dom/client";
import { Slides } from "./Slides";
import { ALL_SLIDES } from "./constants";

function renderApp(app) {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(app);
}

renderApp(<Slides slides={ALL_SLIDES} />);
