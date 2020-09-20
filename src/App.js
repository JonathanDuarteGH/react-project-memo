import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CustomThemeContext } from './contexts/CustomThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import BurgerButton from './components/BurgerButton';
import StarButton from './components/StarButton';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: 'auto',
  },
  title: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  }
}));

export default function App() {
  const classes = useStyles();
  const { currentTheme, setTheme } = useContext(CustomThemeContext);
  const isDark = Boolean(currentTheme === 'darkTheme')

  const handleThemeChange = (event) => {
    const { checked } = event.target
    if (checked) {
      setTheme('darkTheme')
    } else {
      setTheme('normalTheme')
    }
  }

  /*
  switch (checked) {
    case 'darkTheme':
      return setTheme('darkTheme');
    case 'normalTheme':
      return setTheme('normalTheme');
    default:
      return null;
  }
  */

  return (
    <div className="App">
      <div className={classes.root}>
        <AppBar position="static" title="Memo App">
          <Toolbar>
            <BurgerButton />
            <Typography variant="h6" className={classes.title}>
              Memo App
            </Typography>
            <Tooltip title="Toggle light theme/dark theme">
              <FormControlLabel
                control={<Switch checked={isDark} onChange={handleThemeChange} />}
                label="Theme"
              />
            </Tooltip>
            <StarButton />
          </Toolbar>
        </AppBar>
        <Button>
          <AddCircleIcon />
        </Button>
      </div>
    </div>
  );
}