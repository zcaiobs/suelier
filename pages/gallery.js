import Head from './head'
import Navbar from './navbar'
import Footer from './footer'

export default function Gallery() {
  return (
    <div className="gallery">
      <Head />
      <Navbar />
      <main className='content coral-color'>
        <h1>Hello World from Gallery</h1>
      </main>
      <Footer />
    </div>
  )
}