"use client";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import * as React from 'react';
import { Typography, Container, Box} from '@mui/material';


export default function ProjectsPage() {
    const [value, setValue] = React.useState(2);
    return (
        <div>
        <Container maxWidth="md">
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Projects
                </Typography>
            </Box>
        </Container>
              <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" href='/' />
        <BottomNavigationAction label="About" href='/about' />
        <BottomNavigationAction label="Projects" href='/projects' />
        <BottomNavigationAction label="Contact" href='/contact'/>
      </BottomNavigation>
      </div>
    );
}