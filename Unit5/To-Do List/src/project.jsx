import React, { useEffect, useState } from "react";
import "./project.css";
function Project() {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [editId, setEditId] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const savedTasks = localStorage.getItem("todoTasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todoTasks", JSON.stringify(tasks));
  }, [tasks]);
  const handleSubmit = () => {
    if (task.trim() === "") {
      alert("Please enter a task");
      return;
    }
    if (editId !== null) {
      setTasks(
        tasks.map((item) =>
          item.id === editId
            ? { ...item, text: task, priority: priority }
            : item
        )
      );
      setEditId(null);
    } else {
      const newTask = {
        id: Date.now(),
        text: task,
        priority: priority,
        completed: false,
        date: new Date().toLocaleDateString()
      };
      setTasks([...tasks, newTask]);
    }
    setTask("");
    setPriority("Medium");
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };
  const completeTask = (id) => {
    setTasks(
      tasks.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };
  const editTask = (item) => {
    setTask(item.text);
    setPriority(item.priority);
    setEditId(item.id);
  };
  const clearAll = () => {
    if (tasks.length === 0) return;
    if (window.confirm("Delete all tasks?")) {
      setTasks([]);
    }
  };
  const filteredTasks = tasks.filter((item) => {
    const matchesSearch = item.text
      .toLowerCase()
      .includes(search.toLowerCase());
    if (filter === "Completed") {
      return matchesSearch && item.completed;
    }
    if (filter === "Pending") {
      return matchesSearch && !item.completed;
    }
    return matchesSearch;
  });
  const completedCount = tasks.filter(
    (item) => item.completed
  ).length;
  const pendingCount = tasks.filter(
    (item) => !item.completed
  ).length;
  const progress =
    tasks.length === 0
      ? 0
      : Math.round((completedCount / tasks.length) * 100);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <header className="header">
        <div>
          <h1>My To-Do List</h1>
          <p>Organize your day and get things done</p>
        </div>
        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </header>
      <section className="stats">
        <div className="stat-card">
          <h3>{tasks.length}</h3>
          <p>Total Tasks</p>
        </div>
        <div className="stat-card">
          <h3>{pendingCount}</h3>
          <p>Pending</p>
        </div>
        <div className="stat-card">
          <h3>{completedCount}</h3>
          <p>Completed</p>
        </div>
        <div className="stat-card">
          <h3>{progress}%</h3>
          <p>Progress</p>
        </div>
      </section>
      <section className="progress-box">
        <div className="progress-title">
          <span>Today's Progress</span>
          <span>{progress}%</span>
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </section>
      <section className="add-box">
        <h2>
          {editId !== null ? "Edit Task" : "Add New Task"}
        </h2>
        <div className="form">
          <input
            type="text"
            placeholder="What needs to be done?"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="Low">Low Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="High">High Priority</option>
          </select>
          <button
            className="add-btn"
            onClick={handleSubmit}
          >
            {editId !== null ? "Update Task" : "+ Add Task"}
          </button>
        </div>
        {editId !== null && (
          <button
            className="cancel-btn"
            onClick={() => {
              setEditId(null);
              setTask("");
              setPriority("Medium");
            }}
          >
            Cancel Edit
          </button>
        )}
      </section>
      <section className="search-box">
        <input
          type="text"
          placeholder="🔍 Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </section>
      <div className="task-header">
        <h2>My Tasks</h2>
        <div className="filters">
          <button
            className={filter === "All" ? "selected" : ""}
            onClick={() => setFilter("All")}
          >
            All
          </button>
          <button
            className={filter === "Pending" ? "selected" : ""}
            onClick={() => setFilter("Pending")}
          >
            Pending
          </button>
          <button
            className={filter === "Completed" ? "selected" : ""}
            onClick={() => setFilter("Completed")}
          >
            Completed
          </button>
        </div>
      </div>
      <section className="task-list">
        {filteredTasks.length === 0 ? (
          <div className="empty">
            <div className="empty-icon">📝</div>
            <h3>No tasks found</h3>
            <p>Add a new task to get started!</p>
          </div>
        ) : (
          filteredTasks.map((item) => (
            <div
              className={
                item.completed
                  ? "task completed-task"
                  : "task"
              }
              key={item.id}
            >
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => completeTask(item.id)}
              />
              <div className="task-details">
                <h3>{item.text}</h3>
                <div className="task-info">
                  <span
                    className={`priority ${item.priority.toLowerCase()}`}
                  >
                    {item.priority}
                  </span>
                  <span>📅 {item.date}</span>
                </div>
              </div>
              <div className="actions">
                <button
                  className="edit"
                  onClick={() => editTask(item)}
                >
                  ✏️
                </button>
                <button
                  className="delete"
                  onClick={() => deleteTask(item.id)}
                >
                  🗑️
                </button>
              </div>
            </div>
          ))
        )}
      </section>
      {tasks.length > 0 && (
        <footer className="footer">
          <span>
            {pendingCount} task
            {pendingCount !== 1 ? "s" : ""} remaining
          </span>
          <button onClick={clearAll}>
            Clear All
          </button>
        </footer>
      )}
    </div>
  );
}
export default Project;