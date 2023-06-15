import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import SlideProvider from "./context/SlideProvider";
import { BrowserRouter } from "react-router-dom";
import ItemProvider from "./context/ItemProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <ItemProvider>
      <SlideProvider>
        <App />
      </SlideProvider>
    </ItemProvider>
  </BrowserRouter>
);
