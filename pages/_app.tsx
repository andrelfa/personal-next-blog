import { ThemeProvider } from "styled-components"
import Layout from "../components/Layout/Layout"
import { defaultTheme } from "../styles/default-theme"
import { Container, GlobalStyle, Main } from "../styles/global.styled"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>    
  )
}

export default MyApp
