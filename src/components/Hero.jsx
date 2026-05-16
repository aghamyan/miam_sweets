export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-copy">
        <p className="eyebrow">Տնական տորթեր • պատվերով</p>
        <h1>MiamSweets — տնական տորթեր, որոնք հիշվում են</h1>
        <p className="hero-text">
          Նուրբ կրեմներ, հավասարակշռված համեր և էլեգանտ ձևավորում՝ պատրաստված փոքր խմբաքանակներով Ձեր ընտանիքի ու կարևոր օրերի համար։
        </p>
        <ul className="hero-points" aria-label="MiamSweets առավելություններ">
          <li>Պատվերով չափեր և անհատական մոտեցում</li>
          <li>Տնական ջերմություն՝ մաքուր, վստահելի ներկայացմամբ</li>
        </ul>
        <div className="hero-actions">
          <a className="button button-primary" href="#catalog">Տեսնել տեսականին</a>
          <a className="button button-soft" href="#contact">Կապ հաստատել</a>
        </div>
      </div>
      <div className="hero-card" aria-label="MiamSweets տնական տորթեր">
        <div className="hero-card-inner">
          <span className="hero-card-badge">MiamSweets</span>
          <div className="hero-card-copy">
            <h2>Քաղցր պահեր՝ սիրով պատրաստված</h2>
            <p>Փափուկ բիսկվիթներ, նուրբ կրեմներ և հանգիստ գույներ՝ Ձեր հիշվող առիթների համար։</p>
            <span className="hero-card-note">Պրեմիում • տաքուկ • տնական</span>
          </div>
        </div>
      </div>
    </section>
  )
}
