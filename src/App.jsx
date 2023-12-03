import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Uploads from "./pages/Uploads";
import Header from "./components/Header/Header";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import "./App.scss";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/uploads" element={<Uploads />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/video/:videoId" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
