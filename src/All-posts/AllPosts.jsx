import React, {useState, useEffect} from "react";
import styled from "styled-components";

const Container =  styled.div`
display: flex;
flex-direction: column;
/* justify-content: center; */
align-items:center;
`

const Main = styled.main`
border: 1px solid black;
width: 100vw;
height:auto;

display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-evenly;
`

const Card = styled.div`
border: 1px solid black;
width: 19rem;
height:19rem;
text-align:center;
padding: 1rem;
margin-bottom: 10px;
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

const AllPosts = (props) => {

    return (
        <Container>
        <header>
        <h1>All posts</h1>
        </header>

        <Main>
            
            {props.data ? props.data.map((obj) => {
                return (
                    
                    <Card key={obj.idCategory}>
                    <h1>{obj.strCategory}</h1>
                    <Image src={obj.strCategoryThumb} alt="" />
                    <Description>{obj.strCategoryDescription}</Description>
                    </Card>
                )
            }) : 'Loading...'}
            
        </Main>
        
        </Container>
    )
}

export default AllPosts