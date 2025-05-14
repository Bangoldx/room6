import { Box, Button, TextField, Card, CardContent, Typography, Grid2, Container, styled, Paper, IconButton, Tooltip, ListItem, ListItemText } from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const NewSubject = () => {

    const [error, setError] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch("http://localhost:8080/subjectservices/newsubject", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:
                JSON.stringify({
                    name,
                    description
                })
        });
        const result = await response.text();
        console.log(result);
        if (response.status === 400) {
            setError(result);
            alert(error);
        } else {
            setName("")
            navigate("/subjects")
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <TextField
                    required
                    fullWidth
                    id="outlined-required"
                    label="Subject Name"
                    value={name}
                    style={{ background: "white", borderStyle: "solid" }}
                    onChange={(e) => setName(e.target.value)}
                />

                <TextField
                    required
                    id="outlined-required"
                    aria-label="minimum height"
                    fullWidth
                    multiline rows={3}
                    label="Description"
                    value={description}
                    style={{ background: "white", borderStyle: "solid" }}
                    onChange={(e) => setDescription(e.target.value)}>
                </TextField>

                <Button variant="contained" type='submit'>Submit</Button>
            </form></>
    )
}
export default NewSubject;