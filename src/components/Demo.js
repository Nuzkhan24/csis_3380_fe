import * as React from 'react';
import { Grid } from '@mui/material';

import axios from 'axios';
import BidDialog from './BidDialog';
import { useState, useEffect } from 'react';


import CardComponent from './CardComponent';

export default function MediaCard() {
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

  const daysLeft = 15;
  const currentBid = 379.00;
  const title = `Igor Larionov Autographed Vancouver Canucks Jersey`;
  const description = `Bid on this incredible adidas Vancouver Canucks pro jersey that
                has been autographed by NHL legend - Igor Larionov. A must-have
                for the serious collector.`;
  return (
    
      <Grid container spacing={2} mt={2}>
        <Grid item xs={6} sm={3}>
         <CardComponent />
        </Grid>
      </Grid>
    
  );
}
