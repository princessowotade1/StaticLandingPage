//import { textAlign } from "@mui/system";
import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme.js"

require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);



const RightContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 50px;
    width: 75%;
    justify-content: space-around;
    flex-wrap: wrap;
    top: 53px;
    padding-top:10px;

`
const MenuContainer = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    z-index: 1000;
`
const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    
    
`
const Rect = styled.div`
    position: absolute;
    background-color: ${theme.colors.offWhite};
    width: 130px;
    height: 45px;
    left:1295px;
    border-radius: 52px;
    z-index: -1;
    


`

const NavLink = styled.div`
    text-transform: uppercase;
    line-height: 35px;
    text-decoration: underline;
    margin: 20px;
    color: ${theme.colors.offWhite};
    position:relative;
    left:400px;
    cursor: pointer;


${({isSignUp, isSignIn}) => {
    if(isSignUp) {
        return `
            left: 500px;
            padding: 0px;
            margin-top:0px;
            margin-bottom: 0px;
            font-weight: bold;
            color: ${theme.colors.black};
            
        `
    }

    if(isSignIn){
        return `
            left: 449px;
            
        `
    }
}}
`

const NavBar = () => {
    return(
        <RightContainer>
            <MenuContainer>
                <NavContainer>
                    <NavLink>Our Team</NavLink>
                    <NavLink>Tokens</NavLink>
                    <NavLink>Connect Wallet</NavLink>
                    <NavLink>LightPaper</NavLink>
                    <NavLink isSignIn>Sign In</NavLink>
                    <Rect></Rect>
                    <NavLink isSignUp>Sign Up</NavLink>
            </NavContainer>
            </MenuContainer>
    </RightContainer>
    )
}

export default NavBar;