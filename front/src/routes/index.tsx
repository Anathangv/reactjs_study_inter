import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Dashboard } from "../pages/Dashboard";
import { SigIn } from "../pages/SigIn";
import { SignUp } from "../pages/SignUp";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SigIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
