import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useSelector } from 'react-redux';

import useStyles from '../../hooks/UseStyles';


const TopBar = () =>  {
  const classes = useStyles();
  const login = useSelector(state => state.loggedIn);

  return (
    <AppBar position="static" className={classes.root}>
        <Toolbar>
            <Typography className={classes.title}>
                <Button>
                    <Link to='/' className={classes.link}>
                        Главная
                    </Link>
                </Button>
            </Typography>
            <Button color="inherit" className={classes.secondNav}>
                <Link to='/news' className={classes.link}>
                    Новости
                </Link>
            </Button>
            <Button color="inherit" className={classes.navLink}>
              {login ? (
                    <Typography>
                        <Link to='/profile' className={classes.link}>
                            <AccountCircleIcon fontSize='large' className={classes.icon} />
                        </Link>
                    </Typography>
              ) : (
                    <Typography>
                        <Link to='/login' className={classes.link}>
                            Войти
                        </Link>
                    </Typography>
              )}
            </Button>
        </Toolbar>
    </AppBar>
  );
}

export default TopBar;