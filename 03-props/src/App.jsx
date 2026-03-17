import React from 'react'
import Card from './components/card'

const App = () => {
  return (
        <div className='parent'>
      <Card  user= 'Ritu' age={25} />
      <Card />
      <Card />  
      
        </div>
  )
}

export default App
