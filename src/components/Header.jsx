export default function Header() {
  return (
    <header className="site-header">
      <a className="logo" href="#home" aria-label="MiamSweets գլխավոր էջ">
        <span className="logo-mark">M</span>
        <span>MiamSweets</span>
      </a>
      <nav className="header-nav" aria-label="Գլխավոր բաժիններ">
        <a href="#catalog">Տորթեր</a>
        <a href="#order">Պատվեր</a>
        <a href="#contact">Կապ</a>
      </nav>
    </header>
  )
}
