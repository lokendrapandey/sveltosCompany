import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from 'react-bootstrap';

import Form from './Form'
import Data from './Data';
import Form2 from './Form2';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        {/* <Button variant="primary">Click me</Button> */}

        <Form/>
        {/* <Form2/> */}
        {/* <Data/> */}
    
    </>
  )
}

export default App
