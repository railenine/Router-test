import { Paper, Container } from "@material-ui/core";
import { useSelector } from "react-redux";

import useStyles from "../../hooks/UseStyles";

const News = () => {
    
    const classes = useStyles();
    const news = useSelector(state => state.news);
    
    const renderArray = (arr) => {
        const render = arr.map((item, i) => {
            return (
                <Paper elevation={4} className={classes.news} key={i}>
                    
                        <img src={item.img} alt="header-image" className={classes.img}/>
                        <div className={classes.header}>
                            <h2 className={classes.headerItem}>
                                {item.header}
                            </h2>
                            <h3>
                                {item.description}
                            </h3>
                            <div>{item.author}</div>
                            <div>{item.date}</div>
                        </div>
                   
                    
                </Paper>
            )
        })
        return render
    }

    const items = renderArray(news);
    
    return (
        <Container maxWidth="lg">
            {items}
        </Container>
    )
}

export default News;