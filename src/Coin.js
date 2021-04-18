import React from 'react'
import './Coin.css'
// import Dlg from './Dlg'

// import axios from 'axios'

const Coin = ({id, image, name, symbol, price, volume, priceChange,marketcap}) => {

  // const [showDialog, setShowDialog] = useState(false)

  // const [text, setText] = useState({})

  // const onClick = () =>{
  

  //   const apiUrl=`https://api.coingecko.com/api/v3/coins/${id}`
  //   axios.get(apiUrl)
  //     .then(res=>{
  
  //       // console.log(res.data)
  //       setText(res.data)
  //       setShowDialog(s => !s);
      
  //     })
  //     .catch(err=>[
  //       console.log(err)
  //     ])

  // }
    
  

  return (
    <div className="coin-container"  >
      <div className="coin-row" >
        <div className="coin">
          <img src={image} alt='crypto'/>
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
          
        </div>
        <div className="coin-data">
          <p className="coin-price">${price.toLocaleString()}</p>
          <p className="coin-volume">${volume.toLocaleString()}</p>
          {priceChange<0 
            ? (<p className="coin-percent red">{priceChange.toFixed(2)}%</p>)
            : (<p className="coin-percent green">{priceChange.toFixed(2)}%</p>)
          }
          <p className="coin-mark-cap">
            Mkt Cap ${marketcap.toLocaleString()}
          </p>
        </div>
       
      </div>
      {/* <Dlg 
      Key={text.name}
      showDialog={showDialog} 
      props={text}
      /> */}
    </div>

    
  )
}

export default Coin
