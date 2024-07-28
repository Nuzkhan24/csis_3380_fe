import React from 'react';
import './App.css';
import Appbar from './components/Appbar.js'
import Demo from './components/Demo.js'
import axios from 'axios';
import BidDialog from './components/BidDialog';
import { useState, useEffect } from 'react';


/*function App() {
  return (
    <div className="App">
      <Appbar />
      <Demo />
    </div>
  );
} 
*/

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
