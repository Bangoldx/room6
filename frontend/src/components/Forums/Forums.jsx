import { Button } from "@mui/material";
import { React, useEffect, useState } from "react";

const Forum = () => {

    const [post, setPost] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const response = await fetch("http://localhost:8080/forumservices/forums", {
                    method: "GET",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    }
                });
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

    return (
        <>
        <Button>New Post</Button>
            <ul>
                {post.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    )
}

export default Forum;