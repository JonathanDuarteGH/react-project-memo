import React from 'react'
import Button from '@material-ui/core/Button';
import GradeIcon from '@material-ui/icons/Grade';
import Dialog from '@material-ui/core/Dialog';
import Tooltip from '@material-ui/core/Tooltip';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export default function StarButton() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Tooltip title="Memo to PDF">
        <Button color="inherit" onClick={handleClickOpen}>
          <GradeIcon />
        </Button>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Onsite memo to PDF coming soon"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            It is with great excitement that we announce our upcoming software Text to PDF. Soon you can save all your precious data into one single PDF document within your computer.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}