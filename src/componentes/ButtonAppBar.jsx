import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { FaReact } from 'react-icons/fa';


const theme = createTheme({
  palette: {
    primary: {
      main: '#FB88B4',
    },
  },
});

export default function ButtonAppBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              AT - DESENVOLVIMENTO REACT WEB {<FaReact />}
            </Typography>
            
          </Toolbar>
        </AppBar>

        <Box sx={{ marginTop: '64px' }}>
          <Drawer anchor="left" open={menuOpen} onClose={toggleMenu} PaperProps={{
            sx: { backgroundColor: '#FB88B4', color: 'black' },
          }}>
            <List>
              <ListItem button component={Link} to="/">
                <ListItemText primary="Início" />
              </ListItem>

              <ListItem button component={Link} to="/exercise01">
                <ListItemText primary="1.1" />
              </ListItem>
              
              <ListItem button component={Link} to="/exercise02">
                <ListItemText primary="1.2" />
              </ListItem>

              <ListItem button component={Link} to="/exercise03">
                <ListItemText primary="1.3" />
              </ListItem>

              <ListItem button component={Link} to="/exercise04">
                <ListItemText primary="1.4" />
              </ListItem>

              <ListItem button component={Link} to="/exercise05">
                <ListItemText primary="2.1" />
              </ListItem>

              <ListItem button component={Link} to="/exercise06">
                <ListItemText primary="2.2" />
              </ListItem>

              <ListItem button component={Link} to="/exercise07">
                <ListItemText primary="2.3" />
              </ListItem>

              <ListItem button component={Link} to="/exercise08">
                <ListItemText primary="2.4" />
              </ListItem>

              <ListItem button component={Link} to="/exercise09">
                <ListItemText primary="3.1" />
              </ListItem>

              <ListItem button component={Link} to="/exercise10">
                <ListItemText primary="3.2" />
              </ListItem>

              <ListItem button component={Link} to="/exercise11">
                <ListItemText primary="3.3" />
              </ListItem>

              <ListItem button component={Link} to="/exercise12">
                <ListItemText primary="3.4" />
              </ListItem>

              <ListItem button component={Link} to="/adminligado">
                <ListItemText primary="admin ligado" />
              </ListItem>

              <ListItem button component={Link} to="/admindesligado">
                <ListItemText primary="admin desligado" />
              </ListItem>

              <ListItem button component={Link} to="/brasil">
                <ListItemText primary="Brasil" />
              </ListItem>

              <ListItem button component={Link} to="/exercise16">
                <ListItemText primary="4.4" />
              </ListItem>
            </List>
          </Drawer>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
