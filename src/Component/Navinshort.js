import React from 'react'
import "./Navinshort.css"
import Hambergur from './Hambergur'


const Navinshort = ({setCategory}) => {
  return (
    <div className='nav'>
      <div className='icon'>
        <Hambergur setCategory={setCategory} />
        
      </div>
      <img 
      style={{cursor: "pointer"}}
      src='https://static.inshorts.com/inshorts-website/static_assets/bundle_assets/2023/10_oct/23_mon/304b66eaecbc1fb5822baa59f139755bf57fc1df.logo@2x.png' height='80%'
      alt='logo'></img>
    </div>
  )
}

export default Navinshort
