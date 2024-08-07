import React, { useState, useEffect } from 'react';
// import MenuBar from './components/MenuBar.js';
import Dashboard from './components/Dashboard.js';
import { getItems } from './network/api.js';

const App = () => {
  const [items, setItems] = useState([]);
  const [totalBids, setTotalBids] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const data = await getItems();
      setItems(data);
    };
    fetchItems();
  }, []);

  return (
    <>
      {/* <MenuBar totalBids={totalBids} searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}
      {/* <div>
        {items
          .filter((val) => {
            if (searchTerm === '') {
              return val;
            } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
              return val;
            }
            return null;
          })
          .map((val) => (
            <div key={val.id}>
              <img src={val.image} alt=" " />
              <h3>{val.title}</h3>
            </div>
          ))}
      </div> */}
      <Dashboard setTotalBids={setTotalBids} />
    </>
  );
};

export default App;
