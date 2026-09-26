import { useState } from "react";
import "./project.css";
function Project() {
  const [students, setStudents] = useState([
    { id: 1, name: "Subha", roll: "101", dept: "Cyber Security", tamil: 90, english: 85, maths: 95, science: 88, social: 92 },
    { id: 2, name: "Lakshmi", roll: "102", dept: "CSE", tamil: 80, english: 75, maths: 85, science: 78, social: 82 },
    { id: 3, name: "Dhana", roll: "103", dept: "IT", tamil: 95, english: 90, maths: 98, science: 92, social: 94 }
  ]);
  const [form, setForm] = useState({ name: "", roll: "", dept: "", tamil: "", english: "", maths: "", science: "", social: "" });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const addStudent = (e) => {
    e.preventDefault();
    if (Object.values(form).some((value) => value === "")) {
      alert("Please fill all fields");
      return;
    }
    const marks = [form.tamil, form.english, form.maths, form.science, form.social];
    if (marks.some((mark) => Number(mark) < 0 || Number(mark) > 100)) {
      alert("Marks must be between 0 and 100");
      return;
    }
    if (students.some((student) => student.roll === form.roll)) {
      alert("Roll number already exists");
      return;
    }
    setStudents([...students, { ...form, id: Date.now() }]);
    setForm({ name: "", roll: "", dept: "", tamil: "", english: "", maths: "", science: "", social: "" });
  };
  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };
  const getTotal = (student) => Number(student.tamil) + Number(student.english) + Number(student.maths) + Number(student.science) + Number(student.social);
  const getResult = (student) => [student.tamil, student.english, student.maths, student.science, student.social].every((mark) => Number(mark) >= 35) ? "PASS" : "FAIL";
  const getGrade = (student) => {
    const average = getTotal(student) / 5;
    return getResult(student) === "FAIL" ? "F" : average >= 90 ? "A+" : average >= 80 ? "A" : average >= 70 ? "B" : average >= 60 ? "C" : "D";
  };
  return (
    <div className="admin">
      <header className="header">
        <h1>Student Report Management</h1>
        <p>Admin Dashboard</p>
      </header>
      <div className="summary">
        <div className="card"><h3>Total Students</h3><h2>{students.length}</h2></div>
        <div className="card"><h3>Passed Students</h3><h2>{students.filter((s) => getResult(s) === "PASS").length}</h2></div>
        <div className="card"><h3>Failed Students</h3><h2>{students.filter((s) => getResult(s) === "FAIL").length}</h2></div>
      </div>
      <section className="form-section">
        <h2>Add Student Details</h2>
        <form onSubmit={addStudent}>
          <input name="name" placeholder="Student Name" value={form.name} onChange={handleChange} required />
          <input name="roll" placeholder="Roll Number" value={form.roll} onChange={handleChange} required />
          <input name="dept" placeholder="Department" value={form.dept} onChange={handleChange} required />
          <input name="tamil" type="number" min="0" max="100" placeholder="Tamil Marks" value={form.tamil} onChange={handleChange} required />
          <input name="english" type="number" min="0" max="100" placeholder="English Marks" value={form.english} onChange={handleChange} required />
          <input name="maths" type="number" min="0" max="100" placeholder="Maths Marks" value={form.maths} onChange={handleChange} required />
          <input name="science" type="number" min="0" max="100" placeholder="Science Marks" value={form.science} onChange={handleChange} required />
          <input name="social" type="number" min="0" max="100" placeholder="Social Marks" value={form.social} onChange={handleChange} required />
          <button type="submit">Add Student</button>
        </form>
      </section>
      <section className="table-section">
        <h2>All Student Details and Marks</h2>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Roll No</th><th>Name</th><th>Department</th><th>Tamil</th><th>English</th><th>Maths</th><th>Science</th><th>Social</th><th>Total</th><th>Average</th><th>Grade</th><th>Result</th><th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.roll}</td><td>{student.name}</td><td>{student.dept}</td>
                  <td>{student.tamil}</td><td>{student.english}</td><td>{student.maths}</td><td>{student.science}</td><td>{student.social}</td>
                  <td>{getTotal(student)}/500</td><td>{(getTotal(student) / 5).toFixed(2)}%</td><td>{getGrade(student)}</td>
                  <td className={getResult(student) === "PASS" ? "pass" : "fail"}>{getResult(student)}</td>
                  <td><button className="delete" onClick={() => deleteStudent(student.id)}>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
export default Project;