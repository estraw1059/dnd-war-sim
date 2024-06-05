import React from 'react';
import WarComp from './WarComp';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import FistPunchHammer from './FistPunchHammer';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<div>Test</div>} />
          <Route path="/war" element={<WarComp/>} />
          <Route path="/hammer" element={<FistPunchHammer/>} />
        </Routes>
    </Router>
  );
}

export default App;
