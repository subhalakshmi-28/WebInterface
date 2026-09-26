import React, { useState } from "react";
import "./project.css";
function Project() {
  const students = [
  "Ananya",
  "Arun",
  "Divya",
  "Dharani",
  "Gowtham",
  "Harini",
  "Jeeva",
  "Karthik",
  "Keerthana",
  "Lakshmi",
  "Manoj",
  "Nandhini",
  "Pavithra",
  "Praveen",
  "Rahul",
  "Ravi",
  "Sanjay",
  "Subha",
  "Vignesh",
  "Yamuna"
];
  const [attendance, setAttendance] = useState({});
  const markAttendance = (index, status) => {
    setAttendance({
      ...attendance,
      [index]: status,
    });
  };
  const presentCount = Object.values(attendance).filter(
    (status) => status === "Present"
  ).length;
  const absentCount = Object.values(attendance).filter(
    (status) => status === "Absent"
  ).length;
  const notMarked = students.length - presentCount - absentCount;
  return (
    <div className="container">
      <h1>Attendance Tracker</h1>
      <div className="attendance-box">
        {students.map((student, index) => (
          <div className="student-row" key={index}>
            <span>
              {index + 1}. {student}
            </span>
            <div className="buttons">
              <button
                className={
                  attendance[index] === "Present"
                    ? "present active-present"
                    : "present"
                }
                onClick={() => markAttendance(index, "Present")}
              >
                Present
              </button>
              <button
                className={
                  attendance[index] === "Absent"
                    ? "absent active-absent"
                    : "absent"
                }
                onClick={() => markAttendance(index, "Absent")}
              >
                Absent
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="result">
        <h2>Attendance Summary</h2>
        <p>Total Students : {students.length}</p>
        <p>Present : {presentCount}</p>
        <p>Absent : {absentCount}</p>
        <p>Not Marked : {notMarked}</p>
      </div>
    </div>
  );
}
export default Project;