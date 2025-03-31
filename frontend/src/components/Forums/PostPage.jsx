import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostPage = () => {

    const [post,setPost] = useState("");
    const {postId} = useParams();

    useEffect(() => {
    const fetchPost = async () =>{
        try {
            const response = await fetch(`http://localhost:8080/forumservices/forums/${postId}`, {
                method: "GET"
                }
            );
            if (response.ok) {
                const forumData = await response.json();
                setPost(forumData);
            } else {
                console.error("Failed to retrieve post");
                setPost([]);
            }
        } catch (error) {
            console.log(error);
        }
    };
    fetchPost();
}, [postId])


    return(
        <>
        <h1>{post.title}</h1>
        <h3>{post.body}</h3>
        </>
    )
}
export default PostPage;