const steps = [
  {
    title: 'Ընտրեք համը',
    text: 'Գրեք՝ որ տորթն եք հավանել կամ նկարագրեք Ձեր ցանկալի համադրությունը։',
  },
  {
    title: 'Համաձայնեցրեք տեսքը',
    text: 'Միասին ընտրում ենք չափը, գույնը, ձևավորումը և անհրաժեշտ գրությունը։',
  },
  {
    title: 'Ստացեք թարմ տորթը',
    text: 'Տորթը պատրաստվում է պայմանավորված օրվա համար՝ թարմ և խնամքով փաթեթավորված։',
  },
]

export default function HowToOrder() {
  return (
    <section className="section order-section" id="order">
      <div className="section-heading">
        <p className="eyebrow">Ինչպես պատվիրել</p>
        <h2>Պարզ և հաճելի ընթացք</h2>
      </div>
      <div className="steps-grid">
        {steps.map((step, index) => (
          <article className="step-card" key={step.title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
