import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Courses, SingleCourse, Cart } from "./pages/index";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses/:id" element={<SingleCourse />} />
          <Route path="/category/:category" element={<Courses />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
