export default function Header() {
  return (
    <header className="site-header">
      <a className="logo" href="#home" aria-label="MiamSweets գլխավոր էջ">
        <img className="logo-image" src="/logo/miamsweets-logo.png" alt="MiamSweets logo" />
        <span className="logo-text">MiamSweets</span>
      </a>
      <nav className="header-nav" aria-label="Գլխավոր բաժիններ">
        <a href="#catalog">Տեսականի</a>
        <a href="#order">Ինչպես պատվիրել</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Կապ</a>
      </nav>
    </header>
  )
}
