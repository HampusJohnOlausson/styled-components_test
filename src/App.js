import Header from './components/Header';
import {¬†Container } from './components/styles/container.styled'
import {¬†ThemeProvider } from 'styled-components'
import GlobalStyles from './components/styles/Global';
import content from './content'
import Card from './components/Card'

const theme = {
  colors: {
    header: 'lightblue',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
      <GlobalStyles/>
    ¬®   <Header/>
        <Container >
        {content.map((item, index) => (
          <Card key={index} item={item}/>
        ))}
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
