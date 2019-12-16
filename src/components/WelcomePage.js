import React from "react";
import {Route} from "react-router-dom";
import CharacterList from "./CharacterList";
import CharacterCard from "./CharacterCard";
import App from "../App";
import styled from "styled-components";




const Main = styled.div`

color: blue;



`
const headerImg = styled.div`

border-radius: 100%;
`


export default function WelcomePage() {
  return (
    <Main>
    <section className="welcome-page">
      <header>
        <mainTitle>
        <h1>Welcome to the ultimate fan site!</h1>
        </mainTitle>
       <headerImg>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        </headerImg>
      </header>
    </section>
    </Main>
  );
}

