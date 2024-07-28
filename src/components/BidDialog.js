// src/components/BidDialog.js
import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';

const BidDialog = ({ isOpen, onClose, onBidSubmit }) => {
  const [name, setName] = useState('');
  const [bid, setBid] = useState('');

  const handleSubmit = () => {
    onBidSubmit(name, bid);
    onClose();
    setName('');
    setBid('');
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Enter your bid</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Name"
          type="text"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Bid Amount"
          type="number"
          fullWidth
          value={bid}
          onChange={(e) => setBid(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BidDialog;
