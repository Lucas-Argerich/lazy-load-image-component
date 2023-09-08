import { useState } from 'react'
import styles from './LazyLoadImage.module.css'

interface LazyLoadImageSource {
  lowRes: string
  hiRes: string
}

export interface Props {
  width: number
  height: number
  src: LazyLoadImageSource
  alt: string
}

export default function LazyLoadImage({ width, height, src, alt }: Props) {
  const [loaded, setLoaded] = useState<boolean>()

  const handleLoad = () => {
    setLoaded(true)
  }

  return (
    <div className={styles.div}>
      {!loaded && (
        <div className={styles.placeholder} aria-hidden>
          <span className={styles.span}></span>
          <img
            className={styles.img}
            src={src.lowRes}
            alt={alt}
            width={width}
            height={height}
            loading="eager"
          />
        </div>
      )}
      <img
        className={styles.img}
        src={src.hiRes}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        onLoad={handleLoad}
      />
    </div>
  )
}
