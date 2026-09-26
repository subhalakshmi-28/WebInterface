function Header({ collegeName }) {
  return (
    <header className="app-header">
      <div className="app-header__crest">PDKV</div>
      <div className="app-header__text">
        <p className="app-header__eyebrow">Academic Records Portal</p>
        <h1 className="app-header__college">{collegeName}</h1>
        <h2 className="app-header__title">Student Dashboard</h2>
      </div>
    </header>
  )
}
export default Header
