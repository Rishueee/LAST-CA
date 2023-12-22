import { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './Header'


function Home() {

  
  const [search,setsearch] = useState('')


  const [book,setData] = useState([])

  useEffect(()=>{
   axios.get("https://reactnd-books-api.udacity.com/books",{ headers: { 'Authorization': 'whatever-you-want' }})
    .then(response =>{
      setData(response.data.books)
    })
    
  },[])

  function SearchBtn(e){
    setsearch(e.target.value)
  }
  
  


  return (
    <>
     <Header></Header>

     <input onChange={(e)=> SearchBtn(e)} type="Search" placeholder="Search" id='searchbar'/>
    <div className='books'>
      {book.filter((item)=> item.title.toLowerCase().includes(search)).map((item)=>{
        return<div key={item.id} className='div'>
          
          <div className='boku'>
          <a href={item.infoLink} target="_blank" rel="noopener noreferrer" ></a>
    <img className='bookimg' id='bookimg' src={item.imageLinks.smallThumbnail} alt="images" />
   
            <h6>{item.title}</h6>
            <div className='item'>
            <h5>{item.averageRating || '5'}<i className="fa fa-star"></i></h5>
            <h4>Free</h4>
            </div>
          </div>
          
          
        </div>
      })}
    
    </div>
      
    </>
  )
}

export default Home

