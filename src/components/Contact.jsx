const phone = '+37494415567'
const instagram = 'https://www.instagram.com/miam_sweets_?igsh=MWk0MXU2eDUxdzNn'
const facebook = 'https://www.facebook.com/profile.php?id=61579034647841'

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="contact-card">
        <p className="eyebrow">Կապ</p>
        <h2>Կապ հաստատեք MiamSweets-ի հետ</h2>
        <p>
          Պատվերի համար զանգահարեք կամ գրեք սոցիալական հարթակներում։ Նշեք տորթը, չափը և ցանկալի օրը։
        </p>
        <div className="contact-details" aria-label="Կոնտակտային տվյալներ">
          <a href={`tel:${phone}`}>Phone: {phone}</a>
          <a href={instagram} target="_blank" rel="noreferrer">Instagram</a>
          <a href={facebook} target="_blank" rel="noreferrer">Facebook</a>
        </div>
        <div className="contact-actions">
          <a className="button button-primary" href={`tel:${phone}`}>Զանգահարել</a>
          <a className="button button-soft" href={instagram} target="_blank" rel="noreferrer">Գրել Instagram-ում</a>
          <a className="button button-soft" href={facebook} target="_blank" rel="noreferrer">Գրել Facebook-ում</a>
        </div>
      </div>
    </section>
  )
}
