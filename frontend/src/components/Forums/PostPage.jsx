import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Box, TextField, Stack, Rating, Typography, Container, Card, styled, Paper } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Comment from "./Comment";


const PostPage = ({ user }) => {

    const [post, setPost] = useState("");
    const { postId } = useParams();

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`http://localhost:8080/forumservices/forums/${postId}`, {
                    method: "GET"
                }
                );
                if (response.ok) {
                    const forumData = await response.json();
                    setPost(forumData);
                } else {
                    console.error("Failed to retrieve post");
                    setPost([]);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchPost();
    }, [postId])

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'left',
        width: "90%",
        color: theme.palette.text.secondary,
        ...theme.applyStyles('dark', {
            backgroundColor: '#1A2027',
        }),
    }));

    return (
        <>
            <Container sx={{ maxWidth: false }}>
                <Card sx={{ backgroundColor: '#7EA8BE' }}>
                    <Box
                        fullwidth
                        sx={{ m: 2 }}>

                        <Stack spacing={0} padding={1} key={post.id} >
                            <Item sx={{ display: 'flex', alignItems: 'left', justifyContent: 'space-between', backgroundColor: '#F2E8DC', border: '1px solid black' }}>
                                {/* <Avatar src={post.user.profileUrl} sx={{ width: 24, height: 24 }}></Avatar> */}
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow: 1 }}>
                                    <h1>{post.title}</h1>
                                    {/* {<Rating name="read-only" precision={0.5} defaultValue={0} value={review.rating} readOnly sx={{ ml: 1,  }} />}
                    ({review.rating}) */}
                                </Box>
                            </Item>
                            <Item sx={{ border: '1px solid black' }}>{post.body}</Item>
                        </Stack>

                    </Box>
                    {/* <br /> */}

                    <Comment
                        post={post}
                        user={user} />
                </Card>
            </Container>
        </>
    )
}
export default PostPage;