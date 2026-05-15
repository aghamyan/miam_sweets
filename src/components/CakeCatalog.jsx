import CakeCard from './CakeCard.jsx'

export default function CakeCatalog({ cakes, onSelectCake }) {
  return (
    <section className="section" id="catalog">
      <div className="section-heading">
        <p className="eyebrow">Տեսականի</p>
        <h2>Մեր տորթերը</h2>
        <p>Ընտրեք տորթը, նշեք քանակը և տեսեք գինը։</p>
      </div>
      <div className="catalog-grid">
        {cakes.slice(0, 6).map((cake) => (
          <CakeCard key={cake.id} cake={cake} onSelect={() => onSelectCake(cake)} />
        ))}
      </div>
    </section>
  )
}
