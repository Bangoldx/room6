import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Card, CardContent, Typography, Grid2, Container } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { sizing } from '@mui/system';


const Student = ({ user, refreshUser }) => {

    const navigate = useNavigate();

    return (
        <>
            <div id="top" class="user-container">
                <h1>Hello student {user.firstName} {user.lastName}!</h1>
            </div>
            <Container sx={{ width: 1 }}>
                <Grid2 container spacing={2}>
                    <Grid2>
                        <Card
                            sx={{ width: 322 }}>
                            <h3>My Subjects</h3>
                            <hr />
                            <ul>
                                {user.subjects.map((item, index) => (
                                    <a href="sujects/"{...item}><li key={index}>{item}</li></a>
                                ))}
                            </ul>
                        </Card>
                    </Grid2>
                    <Grid2>
                        <Card sx={{ width: 1 }}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateCalendar />
                            </LocalizationProvider>
                        </Card>
                    </Grid2>
                </Grid2>
            </Container>

        </>
    );
}

export default Student;