import '@/styles/globals.css'
import localFont from 'next/font/local'

const Tiempos = localFont({
  src: [
    {
      path: '../public/fonts/Tiempos-Light.ttf',
      weight: '300'
    },
    {
      path: '../public/fonts/Tiempos-Semibold.ttf',
      weight: '600'
    }
  ],
  variable: '--font-Tiempos'
})

export default function App({ Component, pageProps }) {

  return <main className={Tiempos.className}><Component {...pageProps} /></main>
}
