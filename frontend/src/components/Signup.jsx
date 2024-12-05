import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const Signup = () => {


    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [pwHash, setPassword] = useState("");
    const [verify, setVerify] = useState("");
    const [role, setRole] = useState("");
    const [subjects, setSubjects] = ([]);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (pwHash !== verify) {
            setError("Passwords do not match, please try again.")
        }

        const response = await fetch("http://localhost:8080/userservices/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                username,
                pwHash,
                role,
                subjects
            }),
        });
        const result = await response.text();
        console.log(result);
        if (response.status === 400) {
            setError(result);
        } else {
            alert(result);
            setUsername("");
            setPassword("");
            setVerify("");
            setFirstName("");
            setLastName("");
            setEmail("");
            setUsername("");
            navigate("/");
        }
    }
    return (
        <>
            <body>
                <div id="top" class="signup-container">
                    <form method="POST">
                        <h4>Personal Information:</h4>
                        <div class="form-group">
                            <div class="form-group">
                                <label>First Name:
                                    <input type="text" name="firstName" class="form-control" />
                                </label>
                                <label>Last Name:
                                    <input type="text" name="lastName" class="form-control" />
                                </label>
                            </div>
                            <div class="form-group">
                                <label>Email:
                                    <input type="email" name="email" class="form-control" />
                                </label>
                                <label>Username:
                                    <input th:field="${registerFormDTO.username}" class="form-control" />
                                </label>
                                <p class="error" th:errors="${registerFormDTO.username}"></p>
                            </div>
                            <div class="form-group">
                                <label>Password
                                    <input class="form-control" th:field="${registerFormDTO.password}" type="password" />
                                </label>
                                <p class="error" th:errors="${registerFormDTO.password}"></p>
                                <label>Verify Password
                                    <input class="form-control" th:field="${registerFormDTO.verifyPassword}" type="password" />
                                </label>
                            </div>

                        </div>
                        <hr />
                        <div class="form-group">
                            <label><h4>Select Role:</h4>
                                <input type="radio" id="student" name="role" value="student" />
                                <label for="student"> Student</label>
                                <input type="radio" id="tutor" name="role" value="tutor" />
                                <label for="tutor"> Tutor </label>
                            </label>
                        </div>
                        <hr />
                        <div class="form-group">

                            <label><h4>Select Subjects:</h4>

                                <input type="checkbox" id="subject1" name="subjects" value="Mathematics" />
                                <label for="subject1">Mathematics</label>
                                <input type="checkbox" id="subject2" name="subjects" value="Language" />
                                <label for="subject2">Language</label>
                                <input type="checkbox" id="subject3" name="subjects" value="History" />
                                <label for="subject3">History</label>
                                <input type="checkbox" id="subject4" name="subjects" value="Science" />
                                <label for="subject4">Science</label>
                                <input type="checkbox" id="subject5" name="subjects" value="Social Studies" />
                                <label for="subject5">Social Studies</label>
                            </label>
                        </div>
                        <hr />
                        <div class="form-group">
                            <input type="submit" value="Sign Up!" class="btn btn-success" />
                        </div>
                    </form>
                </div>
                <footer th:replace="~{fragments :: footer}"></footer>
            </body>
        </>
    );
}

export default Signup;