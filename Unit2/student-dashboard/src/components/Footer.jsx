function Footer({ collegeName }) {
  const year = new Date().getFullYear()
  return (
    <footer className="app-footer">
      <p>&copy; {year} {collegeName} · Student Dashboard</p>
      <p className="app-footer__note">Academic data shown here is for demonstration purposes.</p>
    </footer>
  )
}
export default Footer
