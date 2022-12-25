// index.js
import ReactDOM from "react-dom/client";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import App from "./App";

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(
    <App />
);