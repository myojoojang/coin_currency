import React, {useState, useEffect} from 'react'
import './App.css'
import axios from 'axios'
import Coin from './Coin'


function App() {
  const apiUrl='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

  const [coins, setCoins]= useState([])
  const [search, setSearch]=useState('')// vue의 데이터정의

  useEffect(()=>{
    axios.get(apiUrl)
    .then(res=>{
     
      setCoins(res.data) // 데이터 값 정의

    })
    .catch(err=>[
      console.log(err)
    ])
  },[])

  const handleChange=e=>{
    setSearch(e.target.value)
  }


  const filteredCoins=coins.filter(coin=>
    coin.name.toLowerCase().includes(search.toLowerCase())
    
  )

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text"> Search a Coin</h1>
        <form>
          <input type="text" placeholder="Search" className="coin-input" onChange={handleChange}></input>
        </form>
      </div>
      {filteredCoins.map(coin =>{
        return (
          <Coin 
          key={coin.id}
          id={coin.id}

          name={coin.name}
          image={coin.image}
          volume={coin.total_volume}
          marketcap={coin.market_cap}
      
          price={coin.current_price}
          symbol={coin.symbol}
          priceChange={coin.price_change_percentage_24h}

          />
        )
      })}
    </div>
  );
}

export default App;
