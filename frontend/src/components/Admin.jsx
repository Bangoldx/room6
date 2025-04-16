import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Card, CardContent, Typography, Grid2, Container } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Forum from "./Forums/Forums";

const Admin = ({ user }) => {

    const [users, setUsers] = useState([]);
    const [post, setPost] = useState([]);
    const [students, setStudents] = useState([]);
    const [tutors, setTutors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
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

        getUsers();
    }, [])



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



    users.forEach(user => {
        for (let role in user) {
            if (user[role] === "student") {
                students.push(user)
            } else if (user[role] === "tutor") {
                tutors.push(user)
            }
        }
    })


    return (
        <>
            <h1>Welcome {user.firstName}, You have all the power!</h1>
            <Container sx={{ width: 1 }}>
                <Grid2 container spacing={2}>
                    <Grid2>
                        <Card
                            sx={{ width: 322 }}>
                            <h3>Students</h3>
                            <hr />
                            <ul>
                                {students.map((item, index) => (
                                    <li key={index}>{item.username}</li>
                                ))}
                            </ul>
                        </Card>
                    </Grid2>
                    <Grid2>
                        <Card
                            sx={{ width: 322 }}>
                            <h3>Tutors</h3>
                            <hr />
                            <ul>
                                {tutors.map((item, index) => (
                                    <li key={index}>{item.username}</li>
                                ))}
                            </ul>
                        </Card>
                    </Grid2>
                    <Grid2>
                        <Card
                            sx={{ width: 322 }}>
                            <h3>Posts</h3>
                            <hr />
                            <ul>
                                {post.map((item, id) => (
                                    <Link to={`${item.forumId}`}>
                                        <li key={id}>{item.title}</li>
                                    </Link>
                                ))}
                            </ul>

                        </Card>
                    </Grid2>
                    {/* <Grid2>
                        <Card sx={{ width: 1 }}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateCalendar />
                            </LocalizationProvider>
                        </Card>
                    </Grid2> */}
                </Grid2>
            </Container>
        </>
    )

}

export default Admin