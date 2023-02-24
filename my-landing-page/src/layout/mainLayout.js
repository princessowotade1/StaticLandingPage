import React from "react";
import styled from "styled-components";
import Header from "../components/FrontPage/Logo";
import Blurb from "../components/FrontPage/Blurb";
import Vector from "../components/FrontPage/Vectors";


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
    </MainContainer>
    )
}
export default Home


