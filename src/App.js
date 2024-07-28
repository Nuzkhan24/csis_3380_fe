// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Grid } from '@mui/material';
import CardComponent from './components/CardComponent';
import Appbar from './components/Appbar.js'
import Demo from './components/Demo.js'

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
     <Appbar />
     <Demo />
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



////////////////
/*import React from 'react';
import './App.css';
import Appbar from './components/Appbar.js'
import Demo from './components/Demo.js'
import axios from 'axios';
import BidDialog from './components/BidDialog';
import { useState, useEffect } from 'react';

const App = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [bids, setBids] = useState([]);

  useEffect(() => {
    const fetchBids = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/bids');
        setBids(response.data);
      } catch (error) {
        console.error('Error fetching bids:', error);
      }
    };

    fetchBids();
  }, []);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleBidSubmit = (newBid) => {
    setBids((prevBids) => [newBid, ...prevBids]);
  };

  return (
       <div className="App">
      <Appbar />
      <Demo />
    </div>
  );
};

export default App;
*/