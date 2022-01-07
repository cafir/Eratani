import React from "react";
import { Card, CardActions, CardContent, Button, CardMedia, Typography } from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt"
import useStyles from './styles.js'
import DeleteIcon from "@material-ui/icons/Delete"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.image}/>
            <div className={classes.overlay}>
            </div>
            <div className={classes.overlay2}>
                <Button 
                style={{color: 'white'}} 
                size="small" 
                onClick={() => setCurrentId(post.id)}>
                    <MoreHorizIcon font="default" />
                </Button>
            </div>
            <div className={classes.details}>
            </div>
            <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
        </Card>
    );
}

export default Post;