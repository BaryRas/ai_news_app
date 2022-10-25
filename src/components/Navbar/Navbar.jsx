import { AppBar, Toolbar, Box, Typography, Button } from "@material-ui/core";

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            ANA
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
