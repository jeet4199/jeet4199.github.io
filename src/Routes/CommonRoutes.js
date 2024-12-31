import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";

const CommonRoutes = () => {
  const RoutesArray = [];
  return (<>
    <BrowserRouter
      basename={process.env.PUBLIC_URL}
    >
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  </>)
}

export default CommonRoutes;