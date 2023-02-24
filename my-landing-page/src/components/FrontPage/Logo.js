import React from "react";
import styled from "styled-components";
import Logo from '../../assets/images/LYM_1.png'
import NavBar from "./NavBar";


const HeaderContainer = styled.div`
    width: 100%;
    height: 80px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: relative;

`

const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    top: 0.68%;
    padding-top:10px;
    width: 50%;
    height: 60px;

`
const LogoImg = styled.img`
    width: 90px;
    height: 55px;
    top: 45px;
    left: 40px;
    padding: 10px;
    
`

const Header = () => {
    return(
    <HeaderContainer>
        <LogoContainer>
            <LogoImg src={Logo}></LogoImg>
        </LogoContainer>
        <NavBar/>
    </HeaderContainer>
    )
}
export default Header
