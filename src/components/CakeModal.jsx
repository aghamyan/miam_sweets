import { useEffect, useState } from 'react'
import { calculateCakePrice } from '../data/cakes.js'

const formatPrice = (price) => `${price.toLocaleString('hy-AM')} դրամ`

export default function CakeModal({ cake, onClose }) {
  const [quantity, setQuantity] = useState(0)

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
  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <div className="modal-card" role="dialog" aria-modal="true" aria-labelledby="cake-modal-title" onClick={(event) => event.stopPropagation()}>
        <button className="modal-close" type="button" onClick={onClose} aria-label="Փակել պատուհանը">
          ×
        </button>
        <img src={cake.image} alt={cake.name} className="modal-image" />
        <p className="eyebrow">Դիտել / Պատվիրել</p>
        <h2 id="cake-modal-title">{cake.name}</h2>
        <p>{cake.description}</p>
        <label className="quantity-field" htmlFor="cake-quantity">
          <span>Նշեք քանակը</span>
          <input
            id="cake-quantity"
            type="number"
            min={cake.minQuantity}
            max={cake.maxQuantity}
            value={quantity}
            onChange={(event) => {
              const nextQuantity = Number(event.target.value)
              setQuantity(Math.min(cake.maxQuantity, Math.max(cake.minQuantity, nextQuantity)))
            }}
          />
        </label>
        <strong>Ընդհանուր՝ {formatPrice(totalPrice)}</strong>
        <p>
          {cake.minQuantity}–{cake.maxQuantity} բաժին, {formatPrice(cake.pricePerPortion)} / բաժին
        </p>
        <a className="button button-primary modal-button" href="#contact" onClick={onClose}>
          Ուղարկել պատվերի հայտ
        </a>
      </div>
    </div>
  )
}
