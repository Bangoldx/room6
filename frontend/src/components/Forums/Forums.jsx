import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, TextField, Card, CardContent, Typography, Grid2, Container, Paper, Stack, styled, IconButton, Tooltip, ListItem, ListItemText } from '@mui/material';



const Forum = () => {

    const [post, setPost] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getPosts = async () => {
            try {
                const response = await fetch("http://localhost:8080/forumservices/forums", {
                    method: "GET"
                }
                );
                if (response.ok) {
                    const forumData = await response.json();
                    setPost(forumData);
                } else {
                    console.error("Failed to retrieve posts");
                    setPost([]);
                }
            } catch (error) {
                console.log(error);
            }

        }
        getPosts();
    }, [])

    return (
        <>
            <Card style={{maxWidth:750, margin:"0 auto"}}>
                {post.map((item, id) => (
                    <ListItem
                    divider
                    // secondaryAction={
                    //     <Tooltip title="Delete">
                    //         <IconButton edge="end" onClick={() => handleDeletePost(item.forumId)}>
                    //             <DeleteIcon />
                    //         </IconButton>
                    //     </Tooltip>
                    // }
                    >
                        <Link to={`/forums/${item.forumId}`} style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
                            <ListItemText primary={item.title} />
                        </Link>
                    </ListItem>
                ))}
            </Card>
            <br />
            <Link to={"/newpost"}>
                <Button variant="contained">New Post</Button>
            </Link>
        </>
    )
}

export default Forum;