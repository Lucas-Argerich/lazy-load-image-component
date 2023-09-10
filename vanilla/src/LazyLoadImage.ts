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

export default function createLazyLoadImage(id: string, props: Props) {
  const parent = document.querySelector(`#${id}`)
  const component = document.createElement('div')
  component.className = styles.placeholder
  component.style.backgroundImage = `url(${props.src.lowRes})`
  component.ariaHidden = 'true'
  component.innerHTML = `
  <img src="${props.src.hiRes}" alt="${props.alt}" width="${props.width}" height="${props.height}" />
	<span class="${styles.blur}"></span>
`
  parent?.appendChild(component)
  
  const img = component.querySelector('img')

  function loaded() {
    component.classList.add(styles.loaded)
  }

  if (img?.complete) {
    loaded()
  } else {
    img?.addEventListener('load', loaded)
  }
}
