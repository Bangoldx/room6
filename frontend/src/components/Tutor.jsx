import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Tutor = ({user, refreshUser}) => {

    const navigate = useNavigate();

    // refreshUser();
    if(!user || !user.role === "tutor"){
        navigate("/login")
    }

    return (
        <>
            <div id="top" class="user-container">
                <h1>Hello tutor {user.firstName} {user.lastName}</h1>
                </div>
        </>
    );
}

export default Tutor;