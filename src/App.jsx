import React, {useState, useEffect} from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home/Home";
import AllPosts from "./All-posts/AllPosts";
import styled from "styled-components";

const Header = styled.nav`
width:100vw;
height: 30px;
`

function App() {

  const [data, setData] = useState(null)

  useEffect(()=>{
      try{
          fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
          .then(response => response.json())
          .then(res => {
              setData(res.categories)
          })
      }
      catch (e) {
          console.log(e)
      }
  },[])

  return (
    <>
    <Header>
    <Link to="/">Home</Link>
    <Link to="/all-posts">All posts</Link>
    </Header>
    <Routes>
    <Route path="/" element={<Home data={data}   />} />
    <Route path="/all-posts" element={<AllPosts data={data} />} />
  </Routes>
  </>
  );
}

export default App;
