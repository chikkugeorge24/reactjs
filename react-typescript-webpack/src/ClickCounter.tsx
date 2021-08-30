import { useState } from 'react'

const ClickCounter = () => {
  const [count, setcount] = useState(0)
  const incrementCounter = () => {
    setcount((prevState) => prevState + 1)
  }
  return (
    <div>
      <button onClick={incrementCounter}>count {count}</button>
    </div>
  )
}

export default ClickCounter
