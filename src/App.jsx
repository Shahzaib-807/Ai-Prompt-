import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PromptDetail from "./pages/PromptDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prompt/:id" element={<PromptDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;