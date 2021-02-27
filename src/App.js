import React from "react";
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Hello from './sayHello';
import Box from './box';

function App() {

  const App = props => (
    <ThemeProvider theme={theme}></ThemeProvider>
  )

  return (
    <div>
      <Box color="yellow" bg="blue">
        <h1>Hello React Styled Systems</h1>
        <Hello/>
      </Box>
      
    </div>
  )
}

export default App;