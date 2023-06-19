import { Route, Routes } from "react-router-dom";
import HomepageLayout from "./layouts/HomepageLayout";
import Homepage from "./pages/Homepage";
import ResumePage from "./pages/ResumePage";

function App() {
  return (
    <div className="App font-mono">
      <Routes>
        <Route path="/" element={<HomepageLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
