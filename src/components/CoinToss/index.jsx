import React, {useState} from 'react'

const CoinToss = () => {
  const headsImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
  const tailsImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

  const [image, setImage] = useState(headsImage)
  const [total, setTotal] = useState(0)
  const [heads, setHeads] = useState(0)
  const [tails, setTails] = useState(0)

  const onTossCoin = () => {
    const result = Math.floor(Math.random() * 2)
    if (result === 0) {
      setImage(headsImage)
      setHeads(prev => prev + 1)
    } else {
      setImage(tailsImage)
      setTails(prev => prev + 1)
    }
    setTotal(prev => prev + 1)
  }

  return (
    <div className="app-container">
      <h1>Coin Toss Game</h1>
      <p>Heads (or) Tails</p>
      <img src={image} alt="toss result" />
      <br />
      <button onClick={onTossCoin}>Toss Coin</button>
      <p>Total: {total}</p>
      <p>Heads: {heads}</p>
      <p>Tails: {tails}</p>
    </div>
  )
}

export default CoinToss
