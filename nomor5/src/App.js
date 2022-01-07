import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid} from "@material-ui/core"
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts.js"
import Posts from './components/Posts/Posts.js'

import memories from "./images/memories.png"

import useStyles from './styles.js'

const App = () => {
    const [currentId, setCurrentId] = useState(null)
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Container maxidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Farmer</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="strecth" spacing={3}>
                            <Posts setCurrentId={setCurrentId}/>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App