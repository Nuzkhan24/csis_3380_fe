import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#ADD8E6',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: 'url("./pexels.png")', // Replace with your image path
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
  height: '200px',
}));

export default function MenuBar({ totalBids }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CustomAppBar position="static">
        <Toolbar sx={{ minHeight: '200px', display: 'flex', justifyContent: 'center' }}> {/* Adjust the minHeight to make the navbar taller */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',marginTop: 5 }}>
            <Typography
            variant="h5"
            color="inherit"
            noWrap
            component="div"
            sx={{
              flexGrow: 1, display: { xs: 'none', sm: 'block' ,marginTop: 2},
              fontFamily: 'inherit'
            }}
          >
            Welcome to the Silent Auction
          </Typography>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' }, marginRight: 2, fontFamily: 'inherit' ,marginTop: 2}}
          >
            Total Bids: {totalBids}
          </Typography>
          </Box>
        </Toolbar>
      </CustomAppBar>
    </Box>
  );
}
