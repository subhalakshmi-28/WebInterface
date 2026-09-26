function SubjectList({ subjects }) {
  return (
    <section className="subject-panel">
      <div className="subject-panel__head">
        <p className="subject-panel__eyebrow">Enrolled Courses</p>
        <h3 className="subject-panel__title">Subject List</h3>
      </div>
      <ul className="subject-list">
        {subjects.map((subject, index) => (
          <li className="subject-list__item" key={subject}>
            <span className="subject-list__index mono">{String(index + 1).padStart(2, '0')}</span>
            <span className="subject-list__name">{subject}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
export default SubjectList
