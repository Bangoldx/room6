import { Box, Button, TextField, Card, CardContent, Typography, Grid2, Container, styled, Paper, IconButton, Tooltip, ListItem, ListItemText } from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";


const Subjects = ({ user }) => {
    const [subject, setSubject] = useState([]);


    const navigate = useNavigate();

    useEffect(() => {

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
        getSubjects();
    }, [])

    return (
        <>
            <h1>Hello from the subjects page</h1>
            {user ? <Link to={"/newsubject"}>
                <Button variant="contained">New Subject</Button>
            </Link>
                :
                <h3>Sign in to create new subject</h3>
            }

            <br />
            <Card
                sx={{ width: 322 }}>
                {subject.map((item, id) => (
                    <ListItem
                        divider
                    >
                        <Link to={`/subjects/${item.id}`} style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
                        <ListItemText primary={item.name} />
                        </Link>
                    </ListItem>
                ))}
            </Card>


        </>
    )
}
export default Subjects;