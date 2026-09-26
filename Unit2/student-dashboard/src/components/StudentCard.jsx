function StudentCard({
  name,
  regNo,
  department,
  year,
  cgpa,
  attendance,
  photo
}) {
  const isAttendanceEligible = attendance >= 75
  const isPlacementEligible = cgpa >= 8
  return (
    <section className="id-card">
      <div className="id-card__photo-wrap">
        <img
          className="id-card__photo"
          src={photo}
          alt={`${name}'s photo`}
        />
      </div>
      <div className="id-card__body">
        <p className="id-card__label">
          Student Name
        </p>
        <h3
          className="id-card__name"
          style={{ color: '#2451B8' }}
        >
          {name}
        </h3>
        <dl className="id-card__grid">
          <div className="id-card__field">
            <dt>Register No</dt>
            <dd className="mono">{regNo}</dd>
          </div>
          <div className="id-card__field">
            <dt>Department</dt>
            <dd>{department}</dd>
          </div>
          <div className="id-card__field">
            <dt>Year</dt>
            <dd>{year}</dd>
          </div>
          <div className="id-card__field">
            <dt>CGPA</dt>
            <dd
              className="mono"
              style={{
                color: '#1E8A4C',
                fontWeight: 700
              }}
            >
              {cgpa}
            </dd>
          </div>
          <div className="id-card__field">
            <dt>Attendance</dt>
            <dd
              className="mono"
              style={{
                color: '#D9772E',
                fontWeight: 700
              }}
            >
              {attendance}%
            </dd>
          </div>
        </dl>
        <div className="id-card__status-row">
          <div
            className={`status-pill ${
              isAttendanceEligible
                ? 'status-pill--ok'
                : 'status-pill--warn'
            }`}
          >
            <span className="status-pill__label">
              Attendance Status
            </span>
            <span className="status-pill__value">
              {isAttendanceEligible
                ? 'Eligible for Semester Exam'
                : 'Not Eligible'}
            </span>
          </div>
          <div
            className={`status-pill ${
              isPlacementEligible
                ? 'status-pill--ok'
                : 'status-pill--warn'
            }`}
          >
            <span className="status-pill__label">
              Placement Status
            </span>
            <span className="status-pill__value">
              {isPlacementEligible
                ? 'Eligible'
                : 'Need Improvement'}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
export default StudentCard