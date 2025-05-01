import { React, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Box, TextField, Stack, Rating, Typography, Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Comment = ({ post, user }) => {
    const [comments, setComments] = useState([]);
    const [body, setBody] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const { postId } = useParams();


    const fetchComments = async () => {
        try {
            const response = await fetch(`http://localhost:8080/forumservices/forums/${postId}/comments`, {
                method: "GET"
            }
            );
            if (response.ok) {
                const commentData = await response.json();
                setComments(commentData);
            } else {
                console.error("Failed to retrieve post");
                setPost([]);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            fetchComments();
        }, 10);

        return () => clearTimeout(timeout);
    }, [postId]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(`http://localhost:8080/forumservices/forums/${postId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:
                JSON.stringify({
                    user,
                    forum: Number(postId),
                    body
                }),
        });

        const result = await response.text();
        if (response.status === 400) {
            setError(result);
            console.log(error);
            setBody("");
        } else {
            toast.success("Comment Posted!")
            setBody("");
            fetchComments();
        }
    }

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        ...theme.applyStyles('dark', {
            backgroundColor: '#1A2027',
        }),
    }));

    return (
        <>
            <ToastContainer position="top-right" autoClose={3000} />

            <Card sx={{ backgroundColor: '#7EA8BE' }}>
                <Box sx={{ m: 2 }}>
                    {comments.map((item, index) => (
                        <Stack spacing={0} padding={1} key={index} >
                            <Item sx={{ display: 'flex', alignItems: 'left', justifyContent: 'space-between', backgroundColor: '#F2E8DC', border: '1px solid black' }}>
                                {/* <Avatar src={review.user.profileUrl} sx={{ width: 24, height: 24 }}></Avatar> */}
                                <Box sx={{ display: 'flex', alignItems: 'left', justifyContent: 'left', flexGrow: 1, placement: 'left-start' }}>
                                    {item.user.username}
                                    {/* {<Rating name="read-only" precision={0.5} defaultValue={0} value={review.rating} readOnly sx={{ ml: 1, }} />} */}
                                    {/* ({review.rating}) */}
                                </Box>
                            </Item>
                            <Item sx={{ border: '1px solid black' }}>{item.body}</Item>
                        </Stack>
                    ))}
                </Box>
            </Card>
            <form onSubmit={handleSubmit}>
                <TextField
                    aria-label="minimum height"
                    fullWidth
                    multiline rows={3}
                    placeholder="Reply"
                    value={body}
                    style={{ background: "white", borderStyle: "solid" }}
                    onChange={(e) => setBody(e.target.value)}>
                </TextField>
                <Button variant="contained" type="submit">Reply!</Button>
            </form>
        </>
    )
}
export default Comment;