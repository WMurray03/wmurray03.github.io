import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../views/Dashboard.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="*" element={test} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
