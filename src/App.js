import React, { useState, useEffect } from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import CharacterCard from "./components/CharacterCard";
import {Route, Link} from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import styled from "styled-components";


const Testing = styled.div
`
text-decoration: none;
text-align: center;
color: green;

`
const TestingImg = styled.div
`

text-align: center;
text-decoration: none;

`


export default function App() {

  const [searchTerm, setSearchTerm] = useState("");

  const [searchResults, setSearchResults] = useState("characters")

  const handleChange = event =>{
    setSearchTerm(event.target.value)
  }

  useEffect(()=> {}, [searchTerm]);

  // const results = character.filter(character =>{
  //   return character.toLowerCase().includes(searchTerm.toLowerCase())
  // });

  // setSearchResults(results);
  
  return (
    <div>
    <form>
      <label htmlFor = "name">Search:</label>
      <input 
      id = "name"
      type = "text"
      name = "textfield"
      onChange = {handleChange}
      value = {searchTerm}
      />
    </form>
    {/* <div>
    <ul>

      {searchResults.map(character=> {
        return <li key = {character}>{character}</li>
      })}

    </ul>
</div> */}
    
   
 <Testing>     <Link to = "/">   Welcome Page  </Link><br/>
     <Link to = "/characters">Characters</Link>
  </Testing>  
   <TestingImg><Route exact path = "/" component = {WelcomePage}/></TestingImg> 
   <Route path = "/characters" component = {CharacterList}/>
      
      <Header />
    
</div>
  );
}
