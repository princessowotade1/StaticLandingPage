import React from "react";
import styled from "styled-components";
import Header from "../components/FrontPage/Logo";
import Blurb from "../components/FrontPage/Blurb";
import Vector from "../components/FrontPage/Vectors";
import Cards from "../components/FrontPage/Cards";



const MainContainer = styled.div`
    padding: 10px;
    width: 100%;
    height: 100%;

`

const Home = () =>{
    return(
    <MainContainer>

        <Vector/>
        <Header/>
        <Blurb/>
        <Cards/>


    </MainContainer>
    )
}
export default Home


