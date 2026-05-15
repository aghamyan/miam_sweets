import { useEffect, useId, useState } from 'react'
import { calculateCakePrice } from '../data/cakes.js'

const formatPrice = (price) => `${price.toLocaleString('hy-AM')} դրամ`

export default function CakeModal({ cake, onClose }) {
  const quantityId = useId()
  const nameId = useId()
  const phoneId = useId()
  const noteId = useId()
  const [quantity, setQuantity] = useState(cake?.minQuantity ?? 1)

  useEffect(() => {
    if (cake) {
      setQuantity(cake.minQuantity)
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

  const handleSubmit = (event) => {
    event.preventDefault()
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

        <img src={cake.image} alt={cake.name} className="modal-image" />

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

          <form className="order-form" onSubmit={handleSubmit}>
            <h3>Պատվերի հայտ</h3>
            <label htmlFor={nameId}>
              Անուն
              <input id={nameId} name="name" type="text" placeholder="Ձեր անունը" autoComplete="name" />
            </label>
            <label htmlFor={phoneId}>
              Հեռախոսահամար
              <input id={phoneId} name="phone" type="tel" placeholder="+374 __ __ __ __" autoComplete="tel" />
            </label>
            <label htmlFor={noteId}>
              Նշումներ
              <textarea id={noteId} name="note" rows="3" placeholder="Օր, հասցե կամ ձևավորման նախընտրություն" />
            </label>
            <button className="button button-primary modal-button" type="submit">
              Ուղարկել պատվերի հայտ
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
