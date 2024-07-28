import React, { useState } from 'react';
import axios from 'axios';

const BidDialog = ({ isOpen, onClose, onBidSubmit }) => {
  const [name, setName] = useState('');
  const [bidAmount, setBidAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBid = { name, bidAmount: parseFloat(bidAmount) };
    
    try {
      const response = await axios.post('http://localhost:3000/api/bids', newBid);
      onBidSubmit(response.data);
      onClose();
    } catch (error) {
      console.error('Error submitting bid:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="dialog-backdrop">
      <div className="dialog">
        <h2>Place Your Bid</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
           
          </label>
          <br />
          <label>
            Bid Amount:
            <input type="number" value={bidAmount} onChange={(e) => setBidAmount(e.target.value)} required />
          </label>
          <br />
          <br/>
          <button type="submit">Submit</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default BidDialog;