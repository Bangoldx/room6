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
                    <h1>Room6</h1>
                    <h2>Where Curiosity Meets Community.</h2>
                    
                </div>
            </div>
        </>
    )
}
export default Hero;