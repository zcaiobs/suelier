import Head from './head'
import Navbar from './navbar'
import Footer from './footer'

export default function App() {
  return (
    <div className='app'>
      <Head />
      <Navbar />
      <main className='content blue-color'>
        <h1>Hello World from Index</h1>
      </main>
      <Footer />
    </div>
  )
}
