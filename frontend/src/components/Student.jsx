import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Student = () => {

    const[users, setUser] = useState([])

    useEffect(() =>{
        const fetchData = async () => {
            try{
                const response = await fetch.get("http://localhost:8080/student/home/");
                setUser(response.data);
            } catch (error) {
                console.error("Error fetching data: " , error);
            }
        };
        fetchData();
    })

    return (
        <>
            <div id="top" class="user-container">
                <h1>Hello student {users.firstName} {users.lastName}</h1>
    
                {/* <div class="user-subjects">
                    <p>Your Subjects</p>
                    for(let i = 0; )
                    <ul th:each="subject : ${user.subjects}">
                        <li th:text="${subject}"></li>
                    </ul>
                </div> */}
                {/* <div class="user-posts">
                    <table class="user-posts-table">
                        <thead>
                            <tr>
                                <th>Posts</th>
                                <th>Comments</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr th:each="post : ${user.posts}">
                                <td><a th:href="@{'../forum/view/' + ${post.id}}" th:text="${post.title}"></a></td>
                                <td th:text="${post.comment.size}"></td>
                            </tr>
                        </tbody>
                    </table>
                </div> */}
                </div>
        </>
    );
}

export default Student;