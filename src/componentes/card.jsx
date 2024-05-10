import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './card.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='card'>
        <img src="./imagen/imagen.png" alt="" className='imagen' />
        <div className='Texto'>
          <p className='terapia2'>Terapia 2</p>
          <p className='ejercicios'>Ejercicios pelvicos</p>
        </div>
      </div>
    </>
  )
}

export default App