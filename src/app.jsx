import "./app.css";

function App() {
  const projects = [
    {
      number: "01",
      title: "Counter App",
      description: "Interactive counter application.",
      technology: "React + HTML + CSS",
      link: "/Unit1/project1.html"
    },
    {
      number: "02",
      title: "Student Profile",
      description: "Student profile webpage with a clean interface.",
      technology: "HTML + CSS",
      link: "/Unit1/project2.html"
    },
    {
      number: "03",
      title: "Student Dashboard",
      description: "Modern dashboard designed for student information.",
      technology: "React + CSS",
      link: "/Unit2/student-dashboard/index.html"
    },
    {
      number: "04",
      title: "Hobbies",
      description: "Creative webpage showcasing personal hobbies.",
      technology: "React + HTML + CSS",
      link: "/Unit2/hobbies-card-app/index.html"
    },
    {
      number: "05",
      title: "Attendance Tracker",
      description: "Application for tracking student attendance.",
      technology: "React + CSS",
      link: "/Unit3/attendance_traker/index.html"
    },
    {
      number: "06",
      title: "Calculator App",
      description: "Simple and interactive calculator application.",
      technology: "React + JavaScript",
      link: "/Unit3/calculator-app/index.html"
    },
    {
      number: "07",
      title: "Form Validation",
      description: "Form validation project using JavaScript.",
      technology: "HTML + CSS + JavaScript",
      link: "/Unit4/form_validation/index.html"
    },
    {
      number: "08",
      title: "Portfolio",
      description: "Personal portfolio website.",
      technology: "React + CSS",
      link: "/Unit4/Portfolio/index.html"
    },
    {
      number: "09",
      title: "TODO App",
      description: "Task management application built with React.",
      technology: "React + Vite",
      link: "/Unit5/To-Do%20List/index.html"
    },
    {
      number: "10",
      title: "RankCard",
      description: "Student report card application.",
      technology: "React + CSS",
      link: "/Unit5/Student_Report_Card/index.html"
    }
  ];

  return (
    <div className="app">

      <header className="header">
        <h1>WebInterface</h1>
        <p>Explore My Web &amp; Development Projects</p>
      </header>

      <div className="projects">

        {projects.map((project) => (
          <div className="project-card" key={project.number}>

            <span className="number">
              {project.number}
            </span>

            <h2>{project.title}</h2>

            <p className="description">
              {project.description}
            </p>

            <p className="technology">
              {project.technology}
            </p>

            <a
              href={project.link}
              className="view-btn"
            >
              View Project →
            </a>

          </div>
        ))}

      </div>

      <footer>
        © 2026 My Projects | Built with HTML, CSS &amp; React
      </footer>

    </div>
  );
}

export default App;