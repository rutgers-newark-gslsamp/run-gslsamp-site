import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
        <div className='text-xl flex justify-center items-center'>
          {/**page content */}
          Home 
        </div>

      
    </>
  )
}

export default App
