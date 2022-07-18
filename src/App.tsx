import React from 'react';
import {Link, Route, Routes } from 'react-router-dom';

import {SuspenseApp} from "./suspense/App";
import {TraditionalSimpleApp} from "./traditional-simple/App";
import {TraditionalProductionApp} from "./traditional-production/App";

function App() {
  return (
    <Routes>
      <Route path="/suspense" element={<SuspenseApp />} />
      <Route path="/traditional-production" element={<TraditionalProductionApp />} />
      <Route path="/traditional-simple" element={<TraditionalSimpleApp />} />
      <Route path="/" element={<Links />} />
    </Routes>
  );
}

const Links = () => (
  <ul>
    <li><Link to="/suspense">Suspense</Link></li>
    <li><Link to="/traditional-simple">Traditional Simple</Link></li>
    <li><Link to="/traditional-production">Traditional Production</Link></li>
  </ul>
)

export default App;
