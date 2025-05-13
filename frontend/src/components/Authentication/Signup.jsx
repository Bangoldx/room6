import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Typography, Card, CardContent, Grid2, TextField, Button, Checkbox, FormControlLabel, FormLabel, FormGroup, FormControl, Radio, RadioGroup } from '@mui/material';

const Signup = () => {


    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [pwHash, setPassword] = useState("");
    const [verify, setVerify] = useState("");
    const [subjects, setSubjects] = useState([]);
    const [error, setError] = useState("");
    const [passwordMatchMessage, setPasswordMatchMessage] = useState("");
    const role = "student";
    const navigate = useNavigate();

    useEffect(() => {
        if (verify && pwHash !== verify) {
            setPasswordMatchMessage("Passwords do not match");
        } else {
            setPasswordMatchMessage("");
        }
    }, [pwHash, verify]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (pwHash !== verify) {
            setError("Passwords do not match, please try again.")
        }

        const response = await fetch("http://localhost:8080/userservices/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                username,
                pwHash,
                role,
            }),
        });
        const result = await response.text();
        console.log(result);
        if (response.status === 400) {
            setError(result);
            alert(error);
        } else {
            alert(result);
            setUsername("");
            setPassword("");
            setVerify("");
            setFirstName("");
            setLastName("");
            setEmail("");
            setUsername("");
            navigate("/");
        }
    }
    return (
        <>
            <Card style={{ maxWidth: 450, margin: "0 auto", padding: "0px 5px" }} sx={{ bgcolor: '#F2E8DC' }}>
                <CardContent sx={{ bgcolor: '#F2E8DC' }}>
                    <Typography variant='h4' gutterBottom sx={{ color: '#223843' }}>Register</Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid2 container spacing={1}>

                            <Grid2 size={{ xs: 12, sm: 6 }} >
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="First Name"
                                    value={firstName}
                                    style={{ background: "white", borderStyle: "solid" }}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </Grid2>

                            <Grid2 size={{ xs: 12, sm: 6 }} >
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Last Name"
                                    value={lastName}
                                    style={{ background: "white", borderStyle: "solid" }}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </Grid2>

                            <Grid2 size={{ xs: 12, sm: 6 }} >
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Email"
                                    type="email"
                                    value={email}
                                    style={{ background: "white", borderStyle: "solid" }}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Grid2>

                            <Grid2 size={{ xs: 12, sm: 6 }} >
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Username"
                                    value={username}
                                    style={{ background: "white", borderStyle: "solid" }}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </Grid2>

                            <Grid2 size={{ xs: 12, sm: 6 }} >
                                <TextField
                                    required
                                    id="outlined-password-input"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                    value={pwHash}
                                    style={{ background: "white", borderStyle: "solid" }}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Grid2>

                            <Grid2 size={{ xs: 12, sm: 6 }} >
                                <TextField
                                    required
                                    id="outlined-password-input"
                                    label="Re-Enter Password"
                                    type="password"
                                    autoComplete="current-password"
                                    value={verify}
                                    style={{ background: "white", borderStyle: "solid" }}
                                    onChange={(e) => setVerify(e.target.value)}
                                />
                            </Grid2>
                            <Grid2 size={{ xs: 12 }} >
                                <p>{passwordMatchMessage}</p>
                            </Grid2>
                        </Grid2>

                        {/* <Grid2 container spacing={1}>
                            <Grid2 size={{ xs: 12, sm: 6 }} >
                            <FormLabel>Subjects</FormLabel>
                                <FormGroup 
                                onChange={(e) => setSubjects([...subjects, e.target.value])}>
                                    <FormControlLabel value="Math" control={<Checkbox />} label="Math" />
                                    <FormControlLabel value="Science" control={<Checkbox />} label="Science" />
                                    <FormControlLabel value="Language" control={<Checkbox />} label="Language" />
                                    <FormControlLabel value="History" control={<Checkbox />} label="History" />
                                    <FormControlLabel value="Social studies" control={<Checkbox />} label="Social Studies" />
                                </FormGroup>
                            </Grid2>
                            <Grid2 size={{ xs: 12, sm: 6 }} >
                                <FormControl>
                                    <FormLabel>Role</FormLabel>
                                    <RadioGroup
                                        name="role"
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}
                                    >
                                        <FormControlLabel value="student" control={<Radio />} label="Student" />
                                        <FormControlLabel value="tutor" control={<Radio />} label="Tutor" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid2>
                        </Grid2> */}

                        <Grid2 size={{ xs: 12 }} >

                            <Button type="submit" variant="contained">Register!</Button>
                        </Grid2>
                    </form>
                </CardContent>
            </Card>

        </>
    );
}

export default Signup;