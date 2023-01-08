import AppContextProvider from '../context/AppContext'
import 'antd/dist/antd.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  )

}

export default MyApp
