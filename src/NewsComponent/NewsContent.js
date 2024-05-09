import { Container } from '@mui/material'
import React from 'react'
import './NewsContent.css';
import NewsCard from '../NewsCard/NewsCard';

const NewsContent = ( {NewsArray ,newsResults}) => {
  return (
    
     <Container maxWidth='md' >
        <div className='content'>
         <div className='dowanloadMessage'>
         <span className='dowanloadText'>
            For the best experience use inshort app on your SmartPhone
         </span>
         <img alt='app store'
         height="80%"
         src='https://assets.inshorts.com/website_assets/images/appstore.png'
         ></img>

<img alt='app store'
         height="80%"
         src='https://assets.inshorts.com/website_assets/images/playstore.png'
         ></img>
         </div>


   
        </div>

           {NewsArray.map((newsItem)=>{
          <NewsCard newsItem={newsItem} key={newsItem.title}/>
   
         })
      
      }
     </Container> 
    
  )
}

export default NewsContent
