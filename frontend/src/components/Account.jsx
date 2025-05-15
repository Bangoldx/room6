import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Grid2, Button } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";


const Account = ({ user }) => {


    return (
        <>
            {!user ? <h2>Hmmm... Seems like you're not logged in. Try <a href="/login">HERE</a>.</h2>
                :
                <div>
                    <h1>TESTING </h1>
                    <Container >
                        <Grid2 container spacing={2}>
                            <Grid2>
                                <TextField id="standard-basic" label="First Name" variant="outlined" value={user.firstName} style={{ background: "white", borderStyle: "solid" }} />
                            </Grid2>
                            <Grid2>
                                <TextField id="standard-basic" label="Last Name" variant="outlined" value={user.lastName} style={{ background: "white", borderStyle: "solid" }} />
                            </Grid2>
                        </Grid2>

                        <br />

                        <Grid2 container spacing={2}>
                            <Grid2>
                                <TextField id="standard-basic" label="Email" variant="outlined" value={user.email} style={{ background: "white", borderStyle: "solid" }} />
                            </Grid2>
                            {/* <Grid2>
                        <TextField id="standard-basic" label="Username" variant="outlined" value={user.username} style={{ background: "white", borderStyle: "solid" }} />
                    </Grid2> */}
                        </Grid2>

                        <br />

                        <Button variant="contained" >Update Profile</Button>

                        <Link to={"/newpost"}>
                            <Button variant="contained" color="error">Delete Account</Button>
                        </Link>

                    </Container>
                </div>
            }
        </>
    )
}
export default Account;