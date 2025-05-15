import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SubjectPage = ({user}) => {

    const [subject, setSubject] = useState("");
    
        const { subjectId } = useParams();
    
        useEffect(() => {
            const fetchSubject = async () => {
                try {
                    const response = await fetch(`http://localhost:8080/subjectservices/subjects/${subjectId}`, {
                        method: "GET"
                    }
                    );
                    if (response.ok) {
                        const subjectData = await response.json();
                        setSubject(subjectData);
                        console.log(subjectData)
                    } else {
                        console.error("Failed to retrieve post");
                        setSubject([]);
                    }
                } catch (error) {
                    console.log(error);
                }
            };
            fetchSubject();
        }, [subjectId])

    return (
        <>
        <h1>{subject.name}</h1>
        <h3>{subject.description}</h3>
        
        </>
    )
}
export default SubjectPage;