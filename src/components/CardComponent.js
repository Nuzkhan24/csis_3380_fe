// src/components/CardComponent.js
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';

import BidDialog from './BidDialog';

import Jersey from '../assets/jersey.png';

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

  const daysLeft = 15;
  const currentBid = 379.00;
  const title = `Igor Larionov Autographed Vancouver Canucks Jersey`;
  const description = `Bid on this incredible adidas Vancouver Canucks pro jersey that
                has been autographed by NHL legend - Igor Larionov. A must-have
                for the serious collector.`;
  return (
    
      
          <Card elevation={6} sx={{ maxWidth: 345, padding: '2%'}}>
            <CardMedia sx={{ height: 300 }} image={Jersey} />
            <CardContent>
              <Typography variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </CardContent>

            <Stack direction="column" alignItems="center" my={2}>
              <Typography variant='h5' color='blue'>Current Bid: ${currentBid}</Typography>
              <Typography variant='h6' color='red'>Time Left: {daysLeft} days</Typography>
              <Button variant="contained">Bid</Button>
            </Stack>
          </Card>
       
    
  );
};

export default CardComponent;
