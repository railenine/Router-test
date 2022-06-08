import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Fragment } from 'react';
import { useDispatch } from 'react-redux';

import useStyles from '../../hooks/UseStyles';
import { login } from '../../actions/actions';

const TopBar = () =>  {
  
    const classes = useStyles();
    const logged = localStorage.getItem('isLoggedIn');
    const dispatch = useDispatch();

    if (logged) {
        dispatch(login())
    }

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
                {/*<Button color="inherit" className={classes.navLink}>
                  {logged ? (
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
                  )} более удобный вариант с проверкой в localStorage true or false
                </Button>*/}
                <Button color="inherit" className={classes.navLink}>
                            <Link to='/profile' className={classes.link}>
                                <Fragment>
                                    <AccountCircleIcon fontSize='large' className={classes.icon} />
                                </Fragment>
                            </Link>
                    </Button>
            </Toolbar>
        </AppBar>
    );
}

export default TopBar;