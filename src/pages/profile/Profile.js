import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Paper, Container } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";


import UseStyles from "../../hooks/UseStyles";

const Profile = () => {
    
    const classes = UseStyles();
    const navigate = useNavigate();
    const logged = localStorage.getItem('isLoggedIn');

    useEffect(() => {
        if (!logged) {
            navigate('/login')
        }
    }, [])

    return (
        <Container maxWidth="sm">
            <Paper elevation={4} className={classes.container}>
                <div>
                    <Avatar 
                        alt="Admin" 
                        src="https://i1.sndcdn.com/artworks-tkOHu1utYqqq1px6-Sy9OYg-t500x500.jpg"
                        className={classes.avatar}
                     />
                </div>
                <h1>Admin</h1>
            </Paper>
        </Container>
    )
}

export default Profile;