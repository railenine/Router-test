import { Button, Container, Paper, Snackbar, TextField } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useState } from "react";
import MuiAlert from '@material-ui/lab/Alert';
import { useNavigate } from "react-router-dom";

import useStyles from "../../hooks/UseStyles";
import { login } from "../../actions/actions";

const Login = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const [log, setLog] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false); 

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        
        e.preventDefault();
        console.log(log, password);
        if (log !== 'Admin' || password !== '12345') {
            setError(true);
        } else {
            dispatch(login())
            localStorage.setItem('isLoggedIn', true)
            navigate('/profile')
        }
    }

    return (
        <Container maxWidth='sm'>
            <Paper elevation={4} className={classes.container}>
                <form>
                    <h1>
                        Вход
                    </h1>
                    <Snackbar open={error} autoHideDuration={3000}>
                        <MuiAlert elevation={6} variant="filled" color="error" severity="error">
                            Имя пользователя или пароль введены не верно
                        </MuiAlert> 
                    </Snackbar>
                    <div>
                        <TextField 
                            variant="outlined" 
                            label="Логин" 
                            value={log}
                            onChange={e => setLog(e.target.value)}
                        />
                    </div>
                    <div>
                        <TextField 
                            variant="outlined"
                            type="password" 
                            label="Пароль" 
                            margin="normal"
                            value={password}
                            onChange={e => setPassword(e.target.value)} 
                        />
                    </div>
                    <Button 
                        color="primary" 
                        size="large" 
                        variant="contained" 
                        margin="normal" 
                        onClick={handleSubmit}
                        className={classes.btn}
                    >
                        Войти
                    </Button>
                </form>
            </Paper>
        </Container>
    )
}

export default Login;