import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import { withTheme } from '../themes/Theme';
import BurgerButton from '../navbar/components/BurgerButton';
import StarButton from '../navbar/components/StarButton';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import AppBar from '@material-ui/core/AppBar';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MemoBody from '../memos/MemoBody';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(2),
    },
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
}));

function App(props) {
  const { darkMode, setDarkMode } = props;
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <>
      <AppBar position="static" title="Memo App">
        <Toolbar>
          <BurgerButton />
          <Typography variant="h6" className={classes.title}>
            Memo App
          </Typography>
          <Tooltip title="Toggle light theme/dark theme">
            <FormControlLabel
              control={
                <Switch
                  checked={darkMode}
                  onChange={() => setDarkMode(!darkMode)}
                />
              }
              label="Theme"
            />
          </Tooltip>
          <StarButton />
        </Toolbar>
      </AppBar>
      <Grid
        className={classes.root}
        container
        justify='center'
        alignItems={matches ? 'flex-start' : 'center'}
      >
        <Grid item>
          <Paper elevation={8}>
            <MemoBody />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default withTheme(App);