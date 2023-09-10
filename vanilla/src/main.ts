import createLazyLoadImage, {type Props as ComponentProps} from './LazyLoadImage'
import './style.css'


const exampleImage: ComponentProps = {
	width: 4000,
	height: 3000,
	src: {
		hiRes: 'https://picsum.photos/id/685/2000/1500',
		lowRes: 'https://picsum.photos/id/685/200/150'
	},
	alt: 'Example Lazy Loaded Image'
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main id="main">
  </main>
`

createLazyLoadImage("main", exampleImage)