import Header from './components/Header.jsx'
import StudentCard from './components/StudentCard.jsx'
import SubjectList from './components/SubjectList.jsx'
import Footer from './components/Footer.jsx'
import studentPhoto from './assets/student.jpeg'
function App() {
  const collegeName = 'Prince Dr K Vasudevan College of Engineering and Technology'
  const student = {
    name: 'Subhalaksmi R',
    regNo: '411625149050',
    department: 'CYBER SECURITY',
    year: 'II',
    cgpa: 8.5,
    attendance: 82,
    photo: studentPhoto,
  }
  const semester = 'III'
  const currentYear = 'II'
  const subjects = ['React', 'Java', 'Python', 'SQL', 'DBMS']
  return (
    <div className="app-shell">
      <Header collegeName={collegeName} />
      <section className="summary-strip">
        <div className="summary-strip__item">
          <span className="summary-strip__label">Current Semester</span>
          <span className="summary-strip__value mono">{semester}</span>
        </div>
        <div className="summary-strip__divider" aria-hidden="true"></div>
        <div className="summary-strip__item">
          <span className="summary-strip__label">Current Year</span>
          <span className="summary-strip__value mono">{currentYear}</span>
        </div>
        <div className="summary-strip__divider" aria-hidden="true"></div>
        <div className="summary-strip__item">
          <span className="summary-strip__label">Total Subjects</span>
          <span className="summary-strip__value mono">{subjects.length}</span>
        </div>
      </section>
      <main className="app-main">
        <StudentCard
          name={student.name}
          regNo={student.regNo}
          department={student.department}
          year={student.year}
          cgpa={student.cgpa}
          attendance={student.attendance}
          photo={student.photo}
        />
        <SubjectList subjects={subjects} />
      </main>
      <Footer collegeName={collegeName} />
    </div>
  )
}
export default App