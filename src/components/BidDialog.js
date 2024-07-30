import React, { useEffect, useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography, Button } from '@mui/material';
import { addUserAndUpdateItem } from '../network/api';



const BidDialog = ({
  isOpen,
  selectedItem,
  handleCloseDialog,
   }) => {
  const [name, setName] = useState('');
  const [bid, setBid] = useState(selectedItem?.currentBid);
  const [isValidBid, setIsValidBid] = useState(false);

  useEffect(() => {
    setBid(selectedItem?.currentBid);
    setIsValidBid(Number.parseInt(bid) >  Number.parseInt(selectedItem?.currentBid));
  }, [selectedItem?.currentBid])

  useEffect(() => {
    setIsValidBid(Number.parseInt(bid) >  Number.parseInt(selectedItem?.currentBid));
  }, [bid])

  const onBidSubmit = async () => {
    await addUserAndUpdateItem(selectedItem, bid, name);
  }
  
  return (
    <Dialog open={isOpen}>
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
          onChange={(e) => {
            setBid(e.target.value);
          }}
        />
        {!isValidBid &&
          <Typography variant="h6" color="red">
            * Please bid an amount higher than current bid: ${selectedItem?.currentBid}
          </Typography>
        }
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDialog}>
          Cancel
        </Button>
        <Button
          onClick={onBidSubmit}
          disabled={!isValidBid}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BidDialog;
