import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const normalTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#cc444',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f5f5f5',
    },
    titleBar: {
      main: '#eeeeee',
      contrastText: '222222',
    }
  }
})

export default normalTheme;