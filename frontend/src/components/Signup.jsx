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
            <div>
                <h1>Register Today!</h1>
            </div>
            <div>
                <form method="POST" onSubmit={handleSubmit}>
                    <h4>Personal Information:</h4>
                    <div>
                        <div>
                            <label>First Name:
                                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                            </label>
                            <label>Last Name:
                                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                            </label>
                        </div>
                        <div>
                            <label>Email:
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </label>
                            <label>Username:
                                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                            </label>
                        </div>
                        <div>
                            <label>
                                Password:
                                <input type='password' value={pwHash} onChange={(e) => setPassword(e.target.value)} />
                            </label>
                            <label>
                                Confirm Password:
                                <input type='password' name='verify' onChange={(e) => setVerify(e.target.value)} />
                            </label>
                        </div>
                    </div>

                    <hr />

                    <h4>Select Role:</h4>

                    <div>
                        <input type="radio" id="student" name="role" value="student" onChange={(e) => setRole(e.target.value)} />
                        <label > Student</label>
                        <input type="radio" id="tutor" name="role" value="tutor" onChange={(e) => setRole(e.target.value)} />
                        <label > Tutor </label>
                    </div>
                    
                    <hr />

                    <div>
                        <input type="submit" value="Sign Up!" onClick={handleSubmit} />
                    </div>
                </form>
            </div>
        </>
    );
}

export default Signup;