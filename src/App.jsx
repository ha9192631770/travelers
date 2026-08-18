import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Home />} />
        <Route path="/destination" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/blogs" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;