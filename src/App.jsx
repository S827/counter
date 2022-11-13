import React from 'react'

export default function App() {
  const [count, setCount] = React.useState(0)
  function decrease() {
    setCount(prevCount => prevCount - 1)
  }
  function increase() {
    setCount(prevCount => prevCount + 1)
  }
  return (
    <div className='app-div'>
      <button className='decrease-btn' onClick={decrease}>-</button>
      <div className='countDisplay-div'>
        <h1 className='count-display'>{count}</h1>
      </div>
      <button className='increase-btn' onClick={increase}>+</button>
    </div>
  )
}