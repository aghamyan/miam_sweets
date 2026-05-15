import { faq } from '../data/faq.js'

export default function FAQ() {
  return (
    <section className="section faq-section" id="faq">
      <div className="section-heading">
        <p className="eyebrow">Հարցեր</p>
        <h2>Հաճախ տրվող հարցեր</h2>
      </div>
      <div className="faq-list">
        {faq.map((item) => (
          <details className="faq-item" key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
