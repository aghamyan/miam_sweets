const steps = [
  {
    title: 'Ընտրեք տորթը',
    text: 'Դիտեք տեսականին և ընտրեք այն համադրությունը, որը համապատասխանում է Ձեր առիթին։',
  },
  {
    title: 'Նշեք չափը',
    text: 'Ընտրեք անհրաժեշտ բաժինների քանակը, իսկ հաշվարկված գինը կերևա անմիջապես։',
  },
  {
    title: 'Ուղարկեք հայտը',
    text: 'Թողեք Ձեր տվյալները, և մենք կկապվենք՝ մանրամասներն ու օրը հաստատելու համար։',
  },
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
          <article className="step-card" key={step.title}>
            <span>{index + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
