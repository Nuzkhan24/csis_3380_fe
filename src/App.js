import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Grid } from '@mui/material';
import CardComponent from './components/CardComponent';
import MenuBar from './components/MenuBar.js'
import Dashboard from './components/Dashboard.js'

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch items from the server
    axios.get('/api/items')
      .then(response => setItems(response.data))
      .catch(error => console.error('Error fetching items:', error));
  }, []);

  const handleBidSubmit = (itemId, name, bidAmount) => {
    const newBid = { itemId, name, bidAmount: parseFloat(bidAmount) };

    // Save the bid to the database
    axios.post('/api/bids', newBid)
      .then(response => {
        // Update the item with the new bid
        setItems(items.map(item => 
          item.id === itemId ? { ...item, currentBid: newBid.bidAmount } : item
        ));
      })
      .catch(error => console.error('Error saving bid:', error));
  };

  return (
    
    <div> 
       <div className="App">
     <MenuBar />
     <Dashboard />
   </div>
      <Grid container spacing={2}>
        {items.map(item => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <CardComponent item={item} onBidSubmit={handleBidSubmit} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
 
};

export default App;