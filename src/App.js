import React from 'react';
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



/*
const App = () => {
  const [items, setItems] = useState([]);
  const [bids, setBids] = useState([]);

  useEffect(() => {
    // Fetch items from the server
    axios.get('/api/items')
      .then(response => setItems(response.data))
      .catch(error => console.error('Error fetching items:', error));
      
    // Fetch bids from the server
    axios.get('/api/bids')
      .then(response => setBids(response.data))
      .catch(error => console.error('Error fetching bids:', error));
  }, []);

  const handleBidSubmit = (itemId, name, bidAmount) => {
    const newBid = { itemId, name, bidAmount: parseFloat(bidAmount) };

    // Save the bid to the database
    axios.post('/api/bids', newBid)
      .then(response => {
        setBids([...bids, response.data]);
      })
      .catch(error => console.error('Error saving bid:', error));
  };

  const highestBid = bids.reduce((max, bid) => (bid.bidAmount > max ? bid.bidAmount : max), 0);

  return (
    <div>
      <div className="App">
      <Appbar />
      <Demo />
    </div>
      <div className="card-container">
        {items.map(item => (
          <Demo key={item.id} item={item} onBidSubmit={handleBidSubmit} />
        ))}
      </div>
      <div className="bids-list">
        <h2>Current Bids</h2>
        {bids.sort((a, b) => b.bidAmount - a.bidAmount).map(bid => (
          <div key={bid.id}>
            <p>{bid.name}: ${bid.bidAmount}</p>
          </div>
        ))}
      </div>
      <div>
        <h3>Highest Bid: ${highestBid}</h3>
      </div>
    </div>
  );
};

export default App;
*/

/*
function App() {
  return (
    <div className="App">
      <Appbar />
      <Demo />
    </div>
  );
} */

