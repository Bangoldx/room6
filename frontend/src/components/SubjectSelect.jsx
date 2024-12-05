import React, { useState } from "react";

const SubjectSelect = () => {
    return (
        <>
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
        </>
    )
}