import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Table} from 'react-bootstrap'
function Trending() {
  const [search, setsearch] = useState("name")
    const [movie, setMovie] = useState([])
    const [term, setterm] = useState("")

    console.log(movie);

   
   function set(){
      axios.get("https://omdbapi.com/?s=movie&apikey=6556e5a8").then((res)=>{
        setMovie(res.data.Search);
    })

    }
    useEffect(() => {
        
       
      set()
    
     
    },[])
    function sub(){
         console.log(term)
      
         setMovie(movie.filter(pre=>(pre.Title.toUpperCase().includes(term.toUpperCase()))))
        
    }
  
    function clear(){

    set()

    console.log(search);
      
  }
    

  return (
    <div>
        <input type="text" placeholder={search} style={{color:"black"}} onChange={(e)=>{setterm(e.target.value)}}></input>
        <button  style={{background:"black",color:"white"}} onClick={sub}>submit</button>
        <button style={{background:"black",color:"white"}} onClick={clear}>clear</button>
       
        <h1 style={{color:"black"}}>  TRENDING MOVIES </h1>

<Table  style={{border :"1px solid black "}} striped bordered hover>
      <thead>
        <tr>
          <th style={{width:"576px",height:"51",color:"blue",background:"lightblue"}}>Title</th>
          <th style={{width:"576px",height:"51",color:"blue",backgroundColor:"lightblue"}}>Type</th>
          <th style={{width:"576px",height:"51",color:"blue",background:"lightblue"}}>Year</th>
          
        </tr>
      </thead>
      <tbody>
    
      
         { 
         movie.map((item)=>{
            return<>
              <tr> 
             
       
        <th  style={{width:"576",height:"51",color:"black",backgroundColor:"lightpink"}}> {item.Title}</th>
    
        <td style={{width:"576",height:"51",color:"black",backgroundColor:"lightpink"}}> {item.Type}</td>
       
        <td style={{width:"576",height:"51",color:"black",backgroundColor:"lightpink"}} > {item.Year}</td>
       
        </tr>
       
     
            
            </>
         }
         )
          
        }
              
    

      </tbody>

        
       
      
    </Table>
        
    </div>
  
  )
  
 
  }
  
  
export default Trending