import { useEffect } from 'react'
import { calculateCakePrice } from '../data/cakes.js'

const formatPrice = (price) => `${price.toLocaleString('hy-AM')} ֏`

export default function CakeModal({ cake, onClose }) {
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

  const startingPrice = calculateCakePrice(cake, cake.minQuantity)

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <div className="modal-card" role="dialog" aria-modal="true" aria-labelledby="cake-modal-title" onClick={(event) => event.stopPropagation()}>
        <button className="modal-close" type="button" onClick={onClose} aria-label="Փակել պատուհանը">
          ×
        </button>
        <img src={cake.image} alt={cake.name} className="modal-image" />
        <p className="eyebrow">Տորթ պատվերով</p>
        <h2 id="cake-modal-title">{cake.name}</h2>
        <p>{cake.description}</p>
        <strong>{formatPrice(startingPrice)}</strong>
        <p>
          {cake.minQuantity}–{cake.maxQuantity} բաժին, {formatPrice(cake.pricePerPortion)} / բաժին
        </p>
        <a className="button button-primary modal-button" href="#contact" onClick={onClose}>
          Պատվիրել այս տորթը
        </a>
      </div>
    </div>
  )
}
