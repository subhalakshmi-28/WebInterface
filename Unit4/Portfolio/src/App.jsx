import React from "react";
import { BrowserRouter } from "react-router-dom";
import Project from "./project";
function App() {
  return (
    <BrowserRouter>
      <Project />
    </BrowserRouter>
  );
}
export default App;