import React from 'react';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import Tooltip from '@material-ui/core/Tooltip';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function BurgerButton() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className='...'>
      <Tooltip title="Menu">
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} color="inherit">
          <MenuIcon />
        </Button>
      </Tooltip>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <List onClick={handleClose} component="nav" aria-label="main mailbox folders">
          <List component="nav" aria-label="secondary mailbox folders">
            <ListItemLink href="#simple-list">
              <ListItemText primary="Settings" />
            </ListItemLink>
          </List>
        </List>
      </Menu>
    </div >
  )
}