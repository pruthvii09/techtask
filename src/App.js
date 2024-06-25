import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Message from "./pages/Message";
import Payments from "./pages/Payments";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/jobs" element={<Home />} />
          <Route path="/messages" element={<Message />} />
          <Route path="/payments" element={<Payments />} />
        </Routes>
      </Router>
      {/* <Home /> */}
    </div>
  );
}

export default App;
