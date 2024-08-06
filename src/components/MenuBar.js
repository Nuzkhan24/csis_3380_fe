import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export default function MenuBar({ totalBids }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"
       sx={{ 
        backgroundColor: '#ADD8E6',
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
      >
        <Toolbar>
          <Typography
            variant="h6"
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
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
