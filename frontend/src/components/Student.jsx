import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, TextField, Card, CardContent, Typography, Grid2, Container, Paper, Stack, styled, IconButton, Tooltip, ListItem, ListItemText } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { sizing } from '@mui/system';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Student = ({ user, refreshUser }) => {

    const navigate = useNavigate();
    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);
    let userComments = [];
    let userPosts = [];


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

    post.forEach(post => {
        if (post.user.id === user.id) {
            userPosts.push(post)
        }
    })

    const fetchComments = async () => {
        try {
            const response = await fetch(`http://localhost:8080/forumservices/forums/comments`, {
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
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            fetchComments();
        }, 10);

        return () => clearTimeout(timeout);
    }, []);

    comments.forEach(comment => {
        if (comment.user.id === user.id) {
            userComments.push(comment)
        }
    })

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
        let result = confirm("Are you sure you want to remove this Post?")
        if (result) {
            try {
                const response = await fetch(`http://localhost:8080/adminservices/post/${e}`, {
                    method: "DELETE",
                    credentials: "include"
                });
                if (response.ok) {
                    console.log(response)
                    toast.success("Post successfully delete")
                    getPosts();
                }

            }
            catch (error) { }

        }
    }

    const handleDeleteComment = async (e) => {
        let result = confirm("Are you sure you want to remove this comment?")
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
            {!user ? <h2>Hmmm... Seems like you're not logged in. Try <a href="/login">HERE</a>.</h2>
                : user.role !== "student" ? navigate("/dashboard")
                    :
                    <div>
                        <div id="top" class="user-container">
                            <h1>Hello student {user.firstName} {user.lastName}!</h1>
                        </div>
                        <ToastContainer position="top-right" autoClose={3000} />
                        <Container sx={{ width: 1 }}>
                            <Grid2 container spacing={2}>
                                <Grid2>
                                    <Card
                                        sx={{ width: 322 }}>
                                        <h3>My Posts</h3>
                                        <hr />
                                        {userPosts.map((item, id) => (
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
                                <Grid2>
                                    <Card
                                        sx={{ width: 322 }}>
                                        <h3>My Comments</h3>
                                        <hr />
                                        {userComments.map((item, id) => (
                                            <ListItem
                                                divider
                                                secondaryAction={
                                                    <Tooltip title="Delete">
                                                        <IconButton edge="end" onClick={() => handleDeleteComment(item.forum.id)}>
                                                            <DeleteIcon />
                                                        </IconButton>
                                                    </Tooltip>
                                                }
                                            >
                                                <Link to={`/forums/${item.forum.id}`} style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
                                                    <ListItemText primary={item.body} />
                                                </Link>
                                            </ListItem>
                                        ))}
                                    </Card>
                                </Grid2>
                            </Grid2>
                        </Container>

                    </div>
            }

        </>
    );
}

export default Student;