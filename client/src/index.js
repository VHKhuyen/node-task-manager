import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import TaskContextProvider from "./contexts/TaskContext";

ReactDOM.render(
  <React.StrictMode>
    <TaskContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </TaskContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
