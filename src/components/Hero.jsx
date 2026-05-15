export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-copy">
        <p className="eyebrow">Տնային պատրաստված • պատվերով</p>
        <h1>Նուրբ հայկական տորթեր՝ Ձեր ամենաքաղցր պահերի համար</h1>
        <p className="hero-text">
          MiamSweets-ը ստեղծում է մաքուր, էլեգանտ և սիրով պատրաստված տորթեր՝ ընտանեկան տոների, փոքր հավաքույթների և հատուկ նվերների համար։
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#catalog">Դիտել տեսականին</a>
          <a className="button button-soft" href="#contact">Պատվիրել</a>
        </div>
      </div>
      <div className="hero-card" aria-label="Առանձնահատկություններ">
        <span className="hero-card-badge">Պրեմիում</span>
        <h2>Ձեռագործ քաղցրություն</h2>
        <p>Թարմ բաղադրիչներ, մեղմ գույներ և անհատական մոտեցում յուրաքանչյուր պատվերի համար։</p>
      </div>
    </section>
  )
}
