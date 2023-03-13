import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { CssBaseline } from "@mui/material";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <StrictMode>
        <CssBaseline />
        <App />
    </StrictMode>
);
