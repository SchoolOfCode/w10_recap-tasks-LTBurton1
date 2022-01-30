import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home";
import Profile from "../Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
