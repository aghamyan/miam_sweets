import { useEffect } from 'react'

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

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <div className="modal-card" role="dialog" aria-modal="true" aria-labelledby="cake-modal-title" onClick={(event) => event.stopPropagation()}>
        <button className="modal-close" type="button" onClick={onClose} aria-label="Փակել պատուհանը">
          ×
        </button>
        <img src={cake.image} alt={cake.name} className="modal-image" />
        <p className="eyebrow">Տորթ պատվերով</p>
        <h2 id="cake-modal-title">{cake.name}</h2>
        <p>{cake.details}</p>
        <strong>{cake.price}</strong>
        <a className="button button-primary modal-button" href="#contact" onClick={onClose}>
          Պատվիրել այս տորթը
        </a>
      </div>
    </div>
  )
}
