import { React, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Box, TextField, Stack, Rating, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';



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
            alert(result);
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


    console.log(comments)

    return (
        <>
            <ul>
                {comments.map((item, index) => (
                    <li key={index}>{item.body}</li>
                ))}
            </ul>
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