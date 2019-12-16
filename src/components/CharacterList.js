import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const[characters, setCharacters]= useState([]);

  useEffect(() => {

    axios
    .get("https://rickandmortyapi.com/api/character/")
    .then(response=>{
      console.log("response", response)
      setCharacters(response.data.results)

    })
    .catch(error=>{
      console.log(error)
    })
  

    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

if(!characters){
  return null;}

  return (
    <section className="character-list">
    
        {
           
        characters.map((character, imgUrl) => {
          return <CharacterCard  key = {character.id} 
          character = {character}   />
        })}


      
    </section>
  );
  
}
