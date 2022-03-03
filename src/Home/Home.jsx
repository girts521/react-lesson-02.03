import React from "react";
import styled from "styled-components";

const Main = styled.main`
border: 1px solid black;
width: 80vw;
height:auto;
margin: auto;

display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
`
const Card = styled.div`
border: 1px solid black;
width: 19rem;
height:19rem;
text-align:center;
padding: 1rem;
margin-bottom:10px;
`
const Image = styled.img`
max-width:16rem;
`
const Description = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
`
const Home = (props) => {

    return (
        <>        
        <h1>Home</h1>
        <Main>
        {props.data ? props.data.slice(0,3).map((obj) => {
                return (
                    
                    <Card key={obj.idCategory}>
                    <h1>{obj.strCategory}</h1>
                    <Image src={obj.strCategoryThumb} alt="" />
                    <Description>{obj.strCategoryDescription}</Description>
                    </Card>
                )
            }) : 'Loading...'}
        </Main>
        </>

    )
}

export default Home