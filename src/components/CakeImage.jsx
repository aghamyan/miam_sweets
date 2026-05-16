import { useEffect, useState } from 'react'

export default function CakeImage({ src, alt, className = '', placeholderClassName = '' }) {
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    setHasError(false)
  }, [src])

  if (!src || hasError) {
    return (
      <div className={`cake-image-placeholder ${placeholderClassName}`} role="img" aria-label={alt}>
        <span>Նկարը շուտով</span>
      </div>
    )
  }

  return <img src={src} alt={alt} className={className} onError={() => setHasError(true)} />
}
