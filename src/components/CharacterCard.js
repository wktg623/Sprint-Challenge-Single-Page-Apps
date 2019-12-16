import React from "react";
import styled from "styled-components";

const WholePage = styled.div
`
display: flex;
flex-direction: row-reverse;
flex-wrap: nowrap;
justify-content: center;


`

const Name = styled.div`


color: blue;
font-size: 32px;


`

const Image = styled.div
`
text-align: center;

border-radius: 100%;


`
const Status = styled.div

`
color: blue;
font-size: 18px;


`

const Species = styled.div

`
color: blue;
font-size: 18px;

`

const Info = styled.div

`
display: flex;
width: 30%;
margin: 0 auto;
flex-direction: column;

text-align: center;
box-sizing: content-box;
border: solid black 1px;
background: coral;
margin-bottom: 10px;
margin-top: 10px;
`

export default function CharacterCard(props) {

  console.log("props", props.character)
  return(
    <div>
    <WholePage>
  <Info>
  <Name>
      <h2> {props.character.name}</h2>
  </Name>
  
  <Status>
      <p>Status: {props.character.status}</p>
      </Status>
      <Species>
      <p>Species: {props.character.species}</p>
</Species>
    </Info>
    <Image ><img src = {props.character.image}/></Image>
    </WholePage>
    </div>
  )
}
