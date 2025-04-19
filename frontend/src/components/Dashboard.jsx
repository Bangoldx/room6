import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

 const Dashboard = ({user}) => {
    const navigate = useNavigate();

    useEffect(() =>{
        if(user.role === "admin"){
        navigate("/admin")
    } else if(user.role === "student"){
        navigate("/student")
    }else if(user.role === "tutor"){
        navigate("/tutor")
    }
    })
 }
 export default Dashboard;