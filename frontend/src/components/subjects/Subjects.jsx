import { Box, Button, TextField, Card, CardContent, Typography, Grid2, Container, styled, Paper, IconButton, Tooltip, ListItem, ListItemText } from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";


const Subjects = () => {
    const [subject, setSubject] = useState([]);
    const { error, setError } = useState("");
    const [name, setName] = useState("");

    const navigate = useNavigate();

    const getSubjects = async () => {
        try {
            const response = await fetch("http://localhost:8080/subjectservices/subjects", {
                method: "GET"
            }
            );
            if (response.ok) {
                const subjectData = await response.json();
                setSubject(subjectData);
            } else {
                console.error("Failed to retrieve subjects");
                setSubject("");
            }
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            getSubjects();
        }, 10);

        return () => clearTimeout(timeout);
    },);

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch("http://localhost:8080/subjectservices/newsubject", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:
                JSON.stringify({
                    name
                })
        });
        const result = await response.text();
        console.log(result);
        if (response.status === 400) {
            setError(result);
            alert(error);
        } else {
            setName("")
            // navigate("/subjects")
        }
    }

    return (
        <>
            <h1>Hello from the subjects page</h1>
            <form onSubmit={handleSubmit}>
                <Grid2 container spacing={1}>

                    <Grid2 size={{ xs: 12, sm: 6 }} >
                        <TextField
                            required
                            id="outlined-required"
                            label="Subject Name"
                            value={name}
                            style={{ background: "white", borderStyle: "solid" }}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Grid2>
                    <Grid2>
                        <Button type='submit'>Submit</Button>
                    </Grid2>
                </Grid2>
            </form>
            <br />
            <Card
                sx={{ width: 322 }}>
                {subject.map((item, id) => (
                    <ListItem
                        divider
                    >
                        <ListItemText primary={item.name} />
                    </ListItem>
                ))}
            </Card>


        </>
    )
}
export default Subjects;