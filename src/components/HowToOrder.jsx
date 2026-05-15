const steps = [
  'Ընտրեք տորթը',
  'Նշեք չափը',
  'Ուղարկեք հայտը',
]

export default function HowToOrder() {
  return (
    <section className="section order-section" id="order">
      <div className="section-heading">
        <p className="eyebrow">Պատվերի քայլեր</p>
        <h2>Ինչպես պատվիրել</h2>
      </div>
      <div className="steps-grid">
        {steps.map((step, index) => (
          <article className="step-card" key={step}>
            <span>{index + 1}</span>
            <h3>{step}</h3>
          </article>
        ))}
      </div>
    </section>
  )
}
