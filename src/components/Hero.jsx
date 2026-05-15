export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-copy">
        <p className="eyebrow">Տնական տորթեր • պատվերով</p>
        <h1>MiamSweets — տնական տորթեր, որոնք հիշվում են</h1>
        <p className="hero-text">
          Ընտրեք մեր պատրաստած տորթերից մեկը, նշեք չափը և ուղարկեք պատվերի հայտ։
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#catalog">Տեսնել տեսականին</a>
        </div>
      </div>
      <div className="hero-card" aria-label="MiamSweets տնական տորթեր">
        <span className="hero-card-badge">MiamSweets</span>
        <h2>Քաղցր պահեր՝ սիրով պատրաստված</h2>
        <p>Փափուկ բիսկվիթներ, նուրբ կրեմներ և գեղեցիկ ձևավորում՝ Ձեր հիշվող առիթների համար։</p>
      </div>
    </section>
  )
}
