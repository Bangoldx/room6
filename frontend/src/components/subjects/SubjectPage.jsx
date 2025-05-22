import { Box, Button, TextField, Card, CardContent, Typography, Grid2, Container, styled, Paper, IconButton, Tooltip, ListItem, ListItemText } from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate, Link, useParams } from "react-router-dom";

const SubjectPage = ({user}) => {
    const [subject, setSubject] = useState([]);
        const { subjectId } = useParams();
        const userId = user.id;
        const [joinedSubjectIds, setJoinedSubjectIds] = useState(new Set());
    

    useEffect(() => {
    
            const getSubjects = async () => {
                try {
                    const response = await fetch(`http://localhost:8080/subjectservices/subjects/${subjectId}`, {
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
        }, [subjectId])

        const handleJoin = async (e) => {
            const res = await fetch(`http://localhost:8080/subjectservices/users/${userId}/subjects/${subjectId}`, {
              method: "PUT",
              credentials: "include",
            });
        
            if (res.ok) {
              setJoinedSubjectIds(prev => new Set(prev).add(e));
            alert("Joined")
            } else {
              alert("Failed to join subject");
            }
          };

    return (
        <>
        <Button onClick={handleJoin} variant="contained">Join</Button>
        <h1>{subject.name}</h1>
        <h3>{subject.description}</h3>
        </>
    )
}
export default SubjectPage;