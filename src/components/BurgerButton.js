import React from 'react';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import Tooltip from '@material-ui/core/Tooltip';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import Divider from '@material-ui/core/Divider';
import DraftsIcon from '@material-ui/icons/Drafts';

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
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="All Notes" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItem>
        </List>
        <Divider />
        <List component="nav" aria-label="secondary mailbox folders">
          <ListItem button>
            <ListItemText primary="Trash" />
          </ListItem>
          <ListItemLink href="#simple-list">
            <ListItemText primary="Settings" />
          </ListItemLink>
        </List>
      </Menu>
    </div >
  )
}