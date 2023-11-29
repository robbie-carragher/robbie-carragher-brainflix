import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Uploads from "./pages/Uploads";

import "./App.scss";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/uploads" element={<Uploads />} />
      </Routes>
    </BrowserRouter>
  );
}
