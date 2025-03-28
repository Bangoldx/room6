import { Button } from "@mui/material";
import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Forum = () => {

    const [post, setPost] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getPosts = async () => {
            try {
                const response = await fetch("http://localhost:8080/forumservices/forums", {
                    method: "GET"
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
    }, [])

    return (
        <>
            <ul>
                {post.map((item, id) => (
                    <Link to={`${id}`}>
                    <li key={id}>{item.body}</li>
                    </Link>
                ))}
            </ul>
            <Link to={"/newpost"}>
            <Button variant="contained">New Post</Button>
            </Link>
            </>
    )
}

export default Forum;