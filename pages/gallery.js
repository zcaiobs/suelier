import Head from '../components/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

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