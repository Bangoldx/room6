import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Tutor = ({user}) => {

    // const[users, setUser] = useState([])

    // useEffect(() =>{
    //     const fetchData = async () => {
    //         try{
    //             const response = await fetch.get("http://localhost:8080/student/home/");
    //             setUser(response.data);
    //         } catch (error) {
    //             console.error("Error fetching data: " , error);
    //         }
    //     };
    //     fetchData();
    // })

    return (
        <>
            <div id="top" class="user-container">
                <h1>Hello tutor {user.firstName} {user.lastName}</h1>
                </div>
        </>
    );
}

export default Tutor;