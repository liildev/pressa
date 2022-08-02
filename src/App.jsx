import "./App.scss";
import Admin from "./pages/Admin/Admin";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";

import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import About from "./pages/About/About";
import Single from "./pages/Single/Single";
import Post from "./pages/Post/Post";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/pressa/*" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="single" element={<Single />} />
          <Route path="add" element={<Post />} />

          <Route path="about" index element={<About />} />
        </Route>
        <Route path="/login" element={<Auth />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
