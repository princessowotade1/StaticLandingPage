import React from "react";
import styled from "styled-components";
import {Paper} from "@mui/material";
import {Box} from "@mui/material"
import theme from "../../styles/theme";
import Holder from "../../assets/images/Holders.png"
import Creator from "../../assets/images/Creators.png"



const MidContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-content: center;
  justify-content: space-between;
`
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-content: center;
  justify-content: space-between;
  position: relative;
  top: 180px;
  left: 150px;
`
const ColorChange = styled.span`
  ${({Blue, Green}) =>{
      
      if(Blue){
          return`
            text-decoration: underline;
            color: ${theme.colors.blue}
          `
      }
      if(Green){
          return`
            text-decoration: underline;
            color: ${theme.colors.green};
          `
      }
      
  }}
`
const CardImage = styled.img`
    width: 350px;
    height: 400px;
    position: relative;
    z-index: 1;
    
    
  
  ${({isHolder, isCreator}) =>{
      
      if(isHolder){
          return`
          left:100px;
          bottom: 22px;
          `
      }
      
      if(isCreator){
          return `
          right: -60px;
          bottom: -35px;
         `
      }
  }}
    

`
const CardText = styled.p`
  text-align: center;
  color: ${theme.colors.offBlack};
  opacity: 0.6;
  font-size: ${theme.fontSize.medium};
  font-weight: 300;
  
  
  ${({isHeader}) =>{
      
      if(isHeader){
          return `
            font-size: ${theme.fontSize.xlarge};
            color: ${theme.colors.black};
            opacity: 1;
            font-weight: 500;
            text-align: center;
            font-style: normal;
            
            
          `
      }
      
  }}
`

const Cards = () => {

    return(
        <MidContainer>
            <CardContainer>
                <Box
                    sx={{
                        display: 'flex',
                        '& > :not(style)': {
                            m: 6,
                            width: 428,
                            height: 588,
                            borderRadius: 5,
                            bgcolor: theme.colors.offWhite,
                            p: 2,
                            zIndex: 0,

                        },
                    }}
                >
                <Paper elevation ={0}>
                    <CardText isHeader>For <ColorChange Green>Creators</ColorChange></CardText>
                    <CardText>
                        Creators can gain independence through a decentralised digital currency system that is
                        dependent on growing and engaging with the community and also their star power. They own
                        10-15% of the total value of the tokens minted.
                    </CardText>
                    <CardImage isCreator src={Creator}/>
                </Paper>
                    <Paper elevation={0}>
                        <CardText isHeader>For <ColorChange Blue>Holders</ColorChange></CardText>
                        <CardText>
                            Holding social tokens allows the individual to gain access to benefits including unreleased
                            content, private communities, direct access to celebrity, early-access to tickets and more as well
                            as the ability to trade with other communities in order to gain access to more creator content with
                            early token buyers being the biggest winners as the value of the token increases with more
                            buyers.
                        </CardText>
                        <CardImage isHolder src={Holder}/>
                    </Paper>
                </Box>
            </CardContainer>
        </MidContainer>
    )
}

export default Cards
