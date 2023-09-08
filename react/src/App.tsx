import './App.css'
import LazyLoadImage from './components/LazyLoadImage'
import { Props as ComponentProps } from './components/LazyLoadImage'

const exampleImage: ComponentProps = {
  width: 4000,
  height: 3000,
  src: {
    hiRes: 'https://picsum.photos/id/685/2000/1500',
    lowRes: 'https://picsum.photos/id/685/200/150'
  },
  alt: 'Example Lazy Loaded Image'
}

function App() {
  return (
    <main>
      <LazyLoadImage {...exampleImage} />
    </main>
  )
}

export default App
