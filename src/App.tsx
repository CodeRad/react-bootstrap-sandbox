import { useState } from 'react';
import { Button } from 'react-bootstrap'

import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (


        <Button onClick={() => setCount((count) => count + 1)}>Count {count}</Button>

  )
}