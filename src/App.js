import Header from './components/Header';
import { Container } from './components/styles/container.styled'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './components/styles/Global';


const theme = {
  colors: {
    header: 'lightblue',
    body: '#fff',
    footer: '#003333',
  },
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
      <GlobalStyles/>
    ¨   <Header/>
        <Container >
        <h1>Hello</h1>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
