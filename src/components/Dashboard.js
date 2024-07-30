import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';

import BidDialog from './BidDialog';
import CardComponent from './CardComponent';
import { getItems,addUserAndUpdateItem } from '../network/api';

export default function Dashboard({setTotalBids}) {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [bidPlaced, setBidPlaced] = useState(false);


  const fetchItems = async () => {
    try {
      const items = await getItems();
      setItems(items);
      const allBids = [];
      items.forEach(i => allBids.push(...i.bidders))      
      setTotalBids (allBids.length)
      console.log('debug: ', items);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [items]);

  const handleOpenDialog = (selectedItem) => {
    setIsDialogOpen(true);
    setSelectedItem(selectedItem);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleBidSubmit = async (selectedItem, bid, name) => {
    try {
      await addUserAndUpdateItem(selectedItem, bid, name);
      setBidPlaced(true);
      fetchItems();
    } catch (error) {
      setBidPlaced(false);
    } finally{
      handleCloseDialog();
      setOpenSnackbar(true)
      setTimeout(() => {
        setOpenSnackbar(false)
        setBidPlaced(false);
      }, 6000);
    }

  }

  return (
    <>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        message={ bidPlaced ? "Bid placed successfully" : "Failed to place the bid"} 
      />
  
      <Grid container spacing={2} mt={2}>
        {items.map((item) => (
          <Grid item xs={6} sm={3} key={item._id}>
            <CardComponent item={item} handleOpenDialog={handleOpenDialog} />
          </Grid>
        ))}
      </Grid>
      <BidDialog
        isOpen={isDialogOpen}
        selectedItem={selectedItem}
        handleCloseDialog={handleCloseDialog}
        handleBidSubmit={handleBidSubmit}
      />
    </>
  );
}
