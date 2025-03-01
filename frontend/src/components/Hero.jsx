import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Hero = ({ }) => {

    return (
        <>
            <div style={{
                backgroundImage: 'url("images/classroom.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',

                display: 'flex',
                minHeight: '300px',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <div style={{
                    color: 'black',
                    textAlign: 'center',
                }}>
                <h1>Welcome to Room 6</h1>
                <h3>A Place for learning!</h3>
                </div>
            </div>
        </>
    )
}
export default Hero;