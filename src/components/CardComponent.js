// src/components/CardComponent.js
import React, { useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import BidDialog from './BidDialog';

const CardComponent = ({ item, onBidSubmit }) => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleBidSubmit = (name, bidAmount) => {
    onBidSubmit(item.id, name, bidAmount);
  };

  return (
    <Card sx={{ maxWidth: 345}}>
      <CardMedia sx={{ height: 300 }} image={item.image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <Typography variant="h6" color="blue" justifyContent="center">
        Current Bid: ${item.currentBid}
      </Typography>
      <Typography variant="body2" color="red">
        Time Left: {item.timeLeft} days
      </Typography>
      <CardActions>
      <div className='button'>
        <Button variant="contained" onClick={handleOpenDialog}>
          Bid
        </Button>
        <BidDialog isOpen={isDialogOpen} onClose={handleCloseDialog} onBidSubmit={handleBidSubmit} />
      </div>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
