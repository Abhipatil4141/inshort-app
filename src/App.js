
import { useEffect, useState } from 'react';
import './App.css';
import Navinshort from './Component/Navinshort';
import NewsContent from './NewsComponent/NewsContent';
import apikey from './Data/config';
import axios from 'axios';
import Footer from './Footer/Footer';

function App() {
  const [category ,setCategory] = useState("general");
  const [newsArray ,setNewsArray] = useState([]);
  const [newsResults,setNewsResults]= useState();


  const newsApi = async ()=>{
    try{
       
       const news = await axios.get(` https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${category}
       `);
       setNewsArray(news.data.articles)
       setNewsResults(news.data.totalResults)

    }
    catch(error){
      console.log(error)
    }
  }

  // console.log(newsArray);


  useEffect(()=>{
    newsApi();
  },[newsResults,category])

  return (
    <div className="App">
      <Navinshort  setCategory={setCategory}/>
      <NewsContent NewsArray= {newsArray} NewsResults={newsResults} />
      <Footer />
    </div>
  );
}

export default App;
