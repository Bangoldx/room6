import React, { useState } from "react";
import { Button, Box, TextField, Stack, Rating, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";

const NewPost = ({ user }) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        const response = await fetch("http://localhost:8080/forumservices/newpost", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                
            },
            body:
                JSON.stringify({
                    user,
                    title,
                    body
                }),
        });

        const results = await response.text();

        if (response.status === 400) {
            setError(results);
            console.log(error);
            setBody("");
            setTitle("");
        } else {
            console.log(user)
            setBody("");
            setTitle("");
            navigate("/forums")
        }
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <TextField
                    aria-label="minimum height"
                    fullWidth
                    // multiline rows={3}
                    placeholder="Title"
                    value={title}
                    style={{ background: "white", borderStyle: "solid" }}
                    onChange={(e) => setTitle(e.target.value)}>
                </TextField>

                <TextField
                    aria-label="minimum height"
                    fullWidth
                    multiline rows={3}
                    placeholder="Post"
                    value={body}
                    style={{ background: "white", borderStyle: "solid" }}
                    onChange={(e) => setBody(e.target.value)}>
                </TextField>
                <Button variant="contained" type="submit">Post!</Button>
            </form>
        </>
    )
}
export default NewPost;