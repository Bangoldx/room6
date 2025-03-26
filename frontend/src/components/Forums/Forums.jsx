import { Button } from "@mui/material";
import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Forum = () => {

    const [post, setPost] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getPosts = async () => {
            try {
                const response = await fetch("http://localhost:8080/forumservices/forums", {
                    method: "GET",
                    // credentials: "include",
                    // headers: {
                    //     "Content-Type": "application/json",
                    }
                );
                if (response.ok) {
                    const forumData = await response.json();
                    console.log(forumData);
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
    }, [getPosts()])

    return (
        <>
        <Button onClick={("/newpost")}>New Post</Button>
            <ul>
                {post.map((item, index) => (
                    <li key={index}>{item.title}</li>
                ))}
            </ul>
        </>
    )
}

export default Forum;