import '../styles/globals.scss'
import { Header } from '../components'
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {

  return (
    <ThemeProvider>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>

  )
}

export default MyApp
