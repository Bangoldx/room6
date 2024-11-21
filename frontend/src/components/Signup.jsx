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

                    <h4>Select Subjects:</h4>
                    <div>
                        <input type="checkbox" id="subject1" name="subjects" value="Mathematics" onChange={(e) => setSubjects(e.target.value)} />
                        <label>Mathematics</label>
                        <input type="checkbox" id="subject2" name="subjects" value="Language" onChange={(e) => setSubjects(e.target.value)} />
                        <label>Language</label>
                        <input type="checkbox" id="subject3" name="subjects" value="History" onChange={(e) => setSubjects(e.target.value)} />
                        <label>History</label>
                        <input type="checkbox" id="subject4" name="subjects" value="Science" onChange={(e) => setSubjects(e.target.value)} />
                        <label>Science</label>
                        <input type="checkbox" id="subject5" name="subjects" value="Social Studies" onChange={(e) => setSubjects(e.target.value)} />
                        <label>Social Studies</label>
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