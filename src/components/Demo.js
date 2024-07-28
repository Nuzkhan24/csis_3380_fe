import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';

import axios from 'axios';
import BidDialog from './BidDialog';
import { useState, useEffect } from 'react';

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

  return (
    <div>
      <CardMedia
        sx={{ height: 80, margin: '16px', }}
        image="./canucks.png"
      />
      <br />
      <Grid container spacing={2}>
        <Grid item xs={6} sm={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 300 }}
              image="./jersey.png"

            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Igor Larionov Autographed Vancouver Canucks Jersey
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Bid on this incredible adidas Vancouver Canucks pro jersey
                that has been autographed by NHL legend - Igor Larionov. A must-have for the serious collector.</Typography>
            </CardContent>
            <h4 style={{ color: 'blue' }}>Current Bid: $379.00</h4>
            <h6 style={{ color: 'red' }}>Time Left: 15 days</h6>
            <div className='button'>
              <CardActions >
                <Button variant="contained">Bid</Button>
              </CardActions></div>
          </Card>
        </Grid>

        <Grid item xs={6} sm={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 300 }}
              image="./puck.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">

                Quinn Hughes Autographed Vancouver Canucks Official Game Puck
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Bid on this outstanding Vancouver Canucks official game puck that has been autographed by NHL superstar - Quinn Hughes. A perfect addition for your collection.</Typography>
            </CardContent>
            <h4 style={{ color: 'blue' }}>Current Bid: $99.00</h4>
            <h6 style={{ color: 'red' }}>Time Left: 10 days</h6>

            <Box>
              <div className='button'>
                <CardActions >
                  <button variant="contained" onClick={handleOpenDialog} >Bid</button>
                  <BidDialog isOpen={isDialogOpen} onClose={handleCloseDialog} onBidSubmit={handleBidSubmit} />
                </CardActions>
              </div>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={6} sm={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 300 }}
              image="./card.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Pavel Bure Autographed 1992-93 Upper Deck Rookie Report Hockey Card
              </Typography>
              <Typography variant="body2" color="text.secondary">

                Bid on this 1992-93 Upper Deck Rookie Report hockey card (#362) that features and has been signed by HOF'er - Pavel Bure

              </Typography></CardContent>
            <h4 style={{ color: 'blue' }}>Current Bid: $39.00</h4>
            <h6 style={{ color: 'red' }}>Time Left: 18 days</h6>

            <Box>
              <div className='button'>
                <CardActions >
                  <button variant="contained" onClick={handleOpenDialog} >Bid</button>
                  <BidDialog isOpen={isDialogOpen} onClose={handleCloseDialog} onBidSubmit={handleBidSubmit} />

                </CardActions>
              </div>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={6} sm={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 300 }}
              image="./stick.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                ED JOVANOVSKI Signed Easton Stick - Vancouver Canucks
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Autographed Ed Jovanovski Vancouver Canucks Easton Stick. This Stick would make a terrific addition to your collection. All of our Autographed Memorabilia comes with our Certificate of Authenticity</Typography>
            </CardContent>
            <h4 style={{ color: 'blue' }}>Current Bid: $69.00</h4>
            <h6 style={{ color: 'red' }}>Time Left: 5 days</h6>

            <Box>
              <div className='button'>
                <CardActions >
                  <button variant="contained" onClick={handleOpenDialog} >Bid</button>
                  <BidDialog isOpen={isDialogOpen} onClose={handleCloseDialog} onBidSubmit={handleBidSubmit} />

                </CardActions>
              </div>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={6} sm={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 300 }}
              image="./puck2.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Nils Hoglander Autographed Vancouver Canucks Official Game Puck
              </Typography>
              <Typography variant="body2" color="text.secondary">
                From the AJ Sports autograph collection,
                Hand signed hockey Puck
                Official Inglasco Licensed NHL Puck
                AJ Sports certificate of authenticity and hologram</Typography>
            </CardContent>
            <h4 style={{ color: 'blue' }}>Current Bid: $65.00</h4>
            <h6 style={{ color: 'red' }}>Time Left: 5 days</h6>

            <Box>
              <div className='button'>
                <CardActions >
                  <button variant="contained" onClick={handleOpenDialog} >Bid</button>
                  <BidDialog isOpen={isDialogOpen} onClose={handleCloseDialog} onBidSubmit={handleBidSubmit} />

                </CardActions>
              </div>
            </Box>
          </Card>
        </Grid>


        <Grid item xs={6} sm={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 300 }}
              image="./jersey2.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Thatcher Demko Autographed Vancouver Canucks Reverse Retro adidas Pro Jersey
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Bid on this outstanding Vancouver Canucks Reverse Retro adidas jersey that has been autographed by star netminder - Thatcher Demko. An excellent signature to add to your collection on this limited release jersey.</Typography>
            </CardContent>
            <h4 style={{ color: 'blue' }}>Current Bid: $379.00</h4>
            <h6 style={{ color: 'red' }}>Time Left: 5 days</h6>
           
            <Box>
                <CardActions >

                  <button variant="contained" onClick={handleOpenDialog} >Bid</button>
                  <BidDialog isOpen={isDialogOpen} onClose={handleCloseDialog} onBidSubmit={handleBidSubmit} />

                </CardActions>
              
            </Box>

          </Card>
        </Grid>
      </Grid>
    </div>
    
  );
}