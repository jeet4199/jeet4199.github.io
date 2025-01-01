import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import DummyPage from "../Pages/DummyPage";

const CommonRoutes = () => {
  const RoutesArray = [];
  return (<>
    <BrowserRouter
      basename="/jeet4199.github.io"
    >
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dummy" element={<DummyPage />} />
      </Routes>
    </BrowserRouter>
  </>)
}

export default CommonRoutes;