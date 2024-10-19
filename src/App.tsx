import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/shared/Home';
import Entrance from "./component/user/Entrance.tsx";

const App: React.FC = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entrance" element={<Entrance />} />
        </Routes>
      </Router>
  );
};

export default App;
