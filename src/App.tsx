import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import DefaultTheme from './styles/themes/DefaultTheme'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { InfosGithubContextProvider } from './contexts/InfosGithubContext'

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter>
        <InfosGithubContextProvider>
          <Router />
        </InfosGithubContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
