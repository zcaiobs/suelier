import "../styles/globals.css";
import "../styles/location.css";
import "../styles/carousel.css";
import "../styles/btn-whatsapp.css";
import "../styles/show-service.css";
import "../styles/footer.css";
import "../styles/header.css";

import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return <Component {...pageProps} />;
}

export default MyApp;
