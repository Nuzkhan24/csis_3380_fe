import React, { useState } from 'react';
import MenuBar from './components/MenuBar.js';
import Dashboard from './components/Dashboard.js';

const App = () => {
  const [totalBids, setTotalBids] = useState(0);
  return (
    <>
      <MenuBar totalBids={totalBids} />
      <Dashboard setTotalBids={setTotalBids} />
    </>
  );
};

export default App;
