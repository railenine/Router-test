import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      justifyContent: 'flex-start',
      background: '#04399a'
    },
    title: {
        flexGrow: 1
    },
    navLink: {
        
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '20px',
    },
    icon: {
        paddingTop: '5px'
    },
    secondNav: {
        marginRight: '20px'
    },
    container: {
        padding: theme.spacing(4),
        margin: theme.spacing(2),
        textAlign: 'center'
    },
    btn: {
        margin: theme.spacing(2)
    },
    avatar: {
        height: '200px',
        width: '200px',
        margin: '0 auto'
    },
    news: {
        padding: theme.spacing(2),
        margin: theme.spacing(3),
        display: 'flex'
    },
    img: {
        width: '40%',
        borderRadius: '5px'
    },
    header: {
        display: 'inline',
        marginLeft: theme.spacing(2),
        width: '50%'
    }
  }));

  export default useStyles;