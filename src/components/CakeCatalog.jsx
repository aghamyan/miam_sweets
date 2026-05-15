import CakeCard from './CakeCard.jsx'

export default function CakeCatalog({ cakes, onSelectCake }) {
  return (
    <section className="section" id="catalog">
      <div className="section-heading">
        <p className="eyebrow">Տեսականի</p>
        <h2>Սիրված տորթեր</h2>
        <p>Ընտրեք պատրաստի համադրություններից կամ պատվիրեք Ձեր նախընտրած անհատական տարբերակը։</p>
      </div>
      <div className="catalog-grid">
        {cakes.map((cake) => (
          <CakeCard key={cake.id} cake={cake} onSelect={() => onSelectCake(cake)} />
        ))}
      </div>
    </section>
  )
}
