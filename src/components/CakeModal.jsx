import { useEffect, useId, useState } from 'react'
import { calculateCakePrice } from '../data/cakes.js'
import CakeImage from './CakeImage.jsx'

const formatPrice = (price) => `${price.toLocaleString('hy-AM')} դրամ`

export default function CakeModal({ cake, onClose }) {
  const quantityId = useId()
  const nameId = useId()
  const phoneId = useId()
  const locationId = useId()
  const dateId = useId()
  const noteId = useId()
  const [quantity, setQuantity] = useState(cake?.minQuantity ?? 1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  useEffect(() => {
    if (cake) {
      setQuantity(cake.minQuantity)
      setIsSubmitted(false)
      setIsSubmitting(false)
      setSubmitError('')
    }
  }, [cake])

  useEffect(() => {
    if (!cake) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.classList.add('modal-open')

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.classList.remove('modal-open')
    }
  }, [cake, onClose])

  if (!cake) {
    return null
  }

  const totalPrice = calculateCakePrice(cake, quantity)

  const handleQuantityChange = (event) => {
    const nextQuantity = Number(event.target.value)
    setQuantity(Math.min(cake.maxQuantity, Math.max(cake.minQuantity, nextQuantity)))
  }

  const encodeFormData = (formData) => new URLSearchParams(formData).toString()

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitError('')
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeFormData(formData),
      })

      if (!response.ok) {
        setSubmitError('Չհաջողվեց ուղարկել հայտը։ Խնդրում ենք փորձել կրկին։')
        return
      }

      setIsSubmitted(true)
    } catch {
      setSubmitError('Չհաջողվեց ուղարկել հայտը։ Խնդրում ենք փորձել կրկին։')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <div
        className="modal-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cake-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="modal-close" type="button" onClick={onClose} aria-label="Փակել պատուհանը">
          ×
        </button>

        <CakeImage
          src={cake.image}
          alt={cake.name}
          className="modal-image"
          placeholderClassName="modal-image modal-image-placeholder"
        />

        <div className="modal-content">
          <p className="eyebrow">Դիտել / Պատվիրել</p>
          <h2 id="cake-modal-title">{cake.name}</h2>
          <p className="modal-description">{cake.description}</p>

          <div className="quantity-field">
            <div className="quantity-heading">
              <label htmlFor={quantityId}>Քանակ</label>
              <strong>{quantity}</strong>
            </div>
            <input
              id={quantityId}
              type="range"
              min={cake.minQuantity}
              max={cake.maxQuantity}
              step="1"
              value={quantity}
              onChange={handleQuantityChange}
            />
            <div className="quantity-limits" aria-hidden="true">
              <span>{cake.minQuantity}</span>
              <span>{cake.maxQuantity}</span>
            </div>
          </div>

          <div className="price-panel" aria-live="polite">
            <span>Գինը՝</span>
            <strong>{formatPrice(totalPrice)}</strong>
          </div>

          {isSubmitted ? (
            <div className="order-success" role="status">
              Ձեր պատվերի հայտը ստացվել է։ Մեր թիմը կկապվի ձեզ հետ մանրամասները հաստատելու համար։
            </div>
          ) : (
            <form className="order-form" name="cake-order" method="POST" data-netlify="true" onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="cake-order" />
              <input type="hidden" name="selected-cake" value={cake.name} />
              <input type="hidden" name="portion-count" value={quantity} />
              <input type="hidden" name="calculated-price" value={totalPrice} />

              <h3>Պատվերի հայտ</h3>
              <label htmlFor={nameId}>
                Անուն
                <input id={nameId} name="name" type="text" placeholder="Ձեր անունը" autoComplete="name" required />
              </label>
              <label htmlFor={phoneId}>
                Հեռախոսահամար
                <input id={phoneId} name="phone" type="tel" placeholder="+374 __ __ __ __" autoComplete="tel" required />
              </label>
              <label htmlFor={locationId}>
                Հասցե / Տարածք
                <input
                  id={locationId}
                  name="location"
                  type="text"
                  placeholder="Առաքման հասցեն կամ տարածքը"
                  autoComplete="street-address"
                  required
                />
              </label>
              <label htmlFor={dateId}>
                Նախընտրելի ամսաթիվ
                <input id={dateId} name="preferred-date" type="date" required />
              </label>
              <label htmlFor={noteId}>
                Լրացուցիչ նշումներ
                <textarea id={noteId} name="extra-notes" rows="3" placeholder="Ձևավորման կամ առաքման նախընտրություններ" />
              </label>
              {submitError ? (
                <p className="order-error" role="alert">
                  {submitError}
                </p>
              ) : null}
              <button className="button button-primary modal-button" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Ուղարկվում է…' : 'Ուղարկել պատվերի հայտ'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
