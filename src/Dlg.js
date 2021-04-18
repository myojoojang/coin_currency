import React from 'react'

import './Dlg.css'

const Dlg = ({ showDialog, props} ) =>{
  // const [text, setText]=useState('')
  // const apiUrl=`https://api.coingecko.com/api/v3/coins/${id}`

  // useEffect(()=>{
  //   axios.get(apiUrl)
  //   .then(res=>{
     
  //     console.log(res.data)
  //   })
  //   .catch(err=>[
  //     console.log(err)
  //   ])
  // },[])


return (
<div>
  {showDialog 
  ? 
    <div className="dialog">
      <div className="close-icon" >X</div>
        {props.map((item, index) => {
           return <div key={index}>
            {item}</div>;
          })
        }
    </div> 

  : null

  }
</div>
  

)
}




export default Dlg
