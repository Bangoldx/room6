import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';

import { Box, Button, TextField, Card, CardContent, Typography, Grid2, Container, styled, Paper, IconButton, Tooltip, ListItem, ListItemText } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Forum from "../Forums/Forums";

const Admin = ({ user }) => {

    const [users, setUsers] = useState([]);
    const [post, setPost] = useState([]);
    let students = [];
    let tutors = [];
    const navigate = useNavigate();


    const getUsers = async () => {
        try {
            const response = await fetch("http://localhost:8080/adminservices/getallusers", {
                method: "GET"
            }
            );
            if (response.ok) {
                const userData = await response.json();
                setUsers(userData);
            } else {
                console.error("Failed to retrieve users");
                setUsers([]);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            getUsers();
        }, 10);

        return () => clearTimeout(timeout);
    }, []);

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


    useEffect(() => {
        const timeout = setTimeout(() => {
            getPosts();
        }, 10);

        return () => clearTimeout(timeout);
    }, []);

    users.forEach(user => {
        if (user.role === "student") {
            students.push(user);
        } else if (user.role === "tutor") {
            tutors.push(user);
        }
    });

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: (theme.vars ?? theme).palette.text.secondary,
        ...theme.applyStyles('dark', {
            backgroundColor: '#1A2027',
        }),
    }));


    const handleDeletePost = async (e) => {
        console.log(e);
        let result = confirm("Are you sure you want to remove this Post?")
        if (result) {
            try {
                const response = await fetch(`http://localhost:8080/adminservices/post/${e}`, {
                    method: "DELETE",
                    credentials: "include"
                });
                if (response.ok) {
                    console.log(response)
                }

            }
            catch (error) { }

            getPosts();
        }
    }

    const handleDeleteUser = async (e) => {
        let result = confirm("Are you sure you want to remove this user?")
        if (result) {
            try {
                const response = await fetch(`http://localhost:8080/adminservices/user/${e}`, {
                    method: "DELETE",
                    credentials: "include"
                });
                if (response.ok) {
                    console.log(response)
                }

            }
            catch (error) { }

            getUsers();
        }
    }

    return (
        <>
            <h1>Welcome {user.firstName}, You have all the power!</h1>
            <Container sx={{ width: 1 }}>
                <Grid2 container spacing={2}>

                    <Card
                        sx={{ width: 322 }}>
                        <h3>Users | {users.length}</h3>
                        <hr />
                        {users.map((item, id) => (
                            <ListItem
                                divider
                                secondaryAction={
                                    <Tooltip title="Delete">
                                        <IconButton edge="end" onClick={() => handleDeleteUser(item.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Tooltip>
                                }
                            >
                                {/* <Link to={`/forums/${item.forumId}`} style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}> */}
                                <ListItemText primary={item.username} />
                                {/* </Link> */}
                            </ListItem>
                        ))}
                    </Card>

                    <Grid2>
                        <Card
                            sx={{ width: 322 }}>
                            <h3>Students | {students.length}</h3>
                            <hr />

                            {students.map((item, index) => (
                                <ListItem
                                    divider
                                    secondaryAction={
                                        <Tooltip title="Delete">
                                            <IconButton edge="end" onClick={() => handleDeleteUser(item.id)}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </Tooltip>
                                    }
                                >
                                    {/* <Link to={`/forums/${item.forumId}`} style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}> */}
                                    <ListItemText primary={item.username} />
                                    {/* </Link> */}
                                </ListItem>
                            ))}
                        </Card>
                    </Grid2>
                    <Grid2>
                        <Card
                            sx={{ width: 322 }}>
                            <h3>Tutors | {tutors.length}</h3>
                            <hr />
                            {tutors.map((item, index) => (
                                <ListItem
                                    divider
                                    secondaryAction={
                                        <Tooltip title="Delete">
                                            <IconButton edge="end" onClick={() => handleDeleteUser(item.id)}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </Tooltip>
                                    }
                                >
                                    {/* <Link to={`/forums/${item.forumId}`} style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}> */}
                                    <ListItemText primary={item.username} />
                                    {/* </Link> */}
                                </ListItem>
                            ))}
                        </Card>
                    </Grid2>
                </Grid2>
                <br />
                <Grid2 container spacing={2}>

                    <Grid2>
                        <Card
                            sx={{ width: 322 }}>
                            <h3>Posts | {post.length}</h3>
                            <hr />
                            {post.map((item, id) => (
                                <ListItem
                                    divider
                                    secondaryAction={
                                        <Tooltip title="Delete">
                                            <IconButton edge="end" onClick={() => handleDeletePost(item.forumId)}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </Tooltip>
                                    }
                                >
                                    <Link to={`/forums/${item.forumId}`} style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
                                        <ListItemText primary={item.title} />
                                    </Link>
                                </ListItem>
                            ))}
                        </Card>
                    </Grid2>
                </Grid2>
            </Container>
        </>
    )

}

export default Admin