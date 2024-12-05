import React, { useState } from "react";

const RoleSelect = ({role}) => {
    // const [role, setRole] = useState("")
    // const handleSubmit= async (e) => {

    // }
    return (
        <>
            <hr />
            <h4>Select Role:</h4>
            <div>
                <input type="radio" id="student" name="role" value="student" onChange={(e) => setRole(e.target.value)} />
                <label > Student</label>
                <input type="radio" id="tutor" name="role" value="tutor" onChange={(e) => setRole(e.target.value)} />
                <label > Tutor </label>
            </div>
            <button type="submit" onSubmit={handleSubmit}></button>
        </>)
}
export default RoleSelect;