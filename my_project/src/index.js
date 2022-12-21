import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";

import ErrorBoundary from "./components/ErrorCatch";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import CheckActive from "./components/CheckActive";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <CheckActive>
        <Header />
        <Main />
        <Footer />
      </CheckActive>
    </ErrorBoundary>
  </React.StrictMode>
);

reportWebVitals();
