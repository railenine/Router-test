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
    login: {
        padding: theme.spacing(4),
        margin: theme.spacing(2),
        textAlign: 'center'
    },
    btn: {
        margin: theme.spacing(2)
    }
  }));

  export default useStyles;