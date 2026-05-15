export default function CakeCard({ cake, onSelect }) {
  return (
    <article className="cake-card">
      <div className="cake-image-wrap">
        <img src={cake.image} alt={cake.name} className="cake-image" />
      </div>
      <div className="cake-content">
        <div className="cake-title-row">
          <h3>{cake.name}</h3>
          <span>{cake.price}</span>
        </div>
        <p>{cake.description}</p>
        <div className="tag-list" aria-label="Հատկանիշներ">
          {cake.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <button className="text-button" type="button" onClick={onSelect}>
          Մանրամասներ
        </button>
      </div>
    </article>
  )
}
