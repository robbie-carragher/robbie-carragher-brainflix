import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Uploads from "./pages/Uploads";
import Header from "./components/Header/Header";
import "./App.scss";

export default function App() {
  return (
    <BrowserRouter>
     <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/uploads" element={<Uploads />} />
      </Routes>
    </BrowserRouter>
  );
}
