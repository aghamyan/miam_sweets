import { calculateCakePrice } from '../data/cakes.js'

const formatPrice = (price) => `${price.toLocaleString('hy-AM')} դրամ`

export default function CakeCard({ cake, onSelect }) {
  const startingPrice = calculateCakePrice(cake, cake.minQuantity)

  return (
    <article className="cake-card" onClick={onSelect}>
      <div className="cake-image-wrap">
        <img src={cake.image} alt={cake.name} className="cake-image" />
      </div>
      <div className="cake-content">
        <div className="cake-title-row">
          <h3>{cake.name}</h3>
          <span>Սկսած՝ {formatPrice(startingPrice)}</span>
        </div>
        <p>{cake.description}</p>
        <div className="tag-list" aria-label="Պատվերի պայմաններ">
          <span>{cake.minQuantity}–{cake.maxQuantity} բաժին</span>
          <span>{formatPrice(cake.pricePerPortion)} / բաժին</span>
        </div>
        <button className="button button-soft card-button" type="button">
          Դիտել / Պատվիրել
        </button>
      </div>
    </article>
  )
}
