import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";





const BlurbContainer = styled.div`

    display: flex;
    flex-direction: column;
    height: 500px;
    width: 600px;
    align-items: start;
    justify-content: start;
    position: relative;
    left: 120px;
    top: 180px;

`
const TopBlurb = styled.p`
    color: ${theme.colors.blue};
    font-size: ${theme.fontSize.medium};
    width: 190px;
    margin-bottom: 0;
    padding-bottom: 0;
    font-weight: 500;
`
const HeaderBlurb = styled.p`
    color: ${theme.colors.offBlack};
    font-size: ${theme.fontSize.xxlarge};
    font-weight: 500;
    width: 350px;
    margin-bottom: 0;

`
const SubText = styled.p`
    color: ${theme.colors.offBlack};
    opacity: 0.6;
    font-size: ${theme.fontSize.medium};
    width: 400px;
    font-weight: 300;
`
const Button = styled.p`
    background-color: ${theme.colors.green};
    color: ${theme.colors.offWhite};
    border-radius: 52px;
    margin-top: 10px;
    padding: 20px;
    font-weight: 700;
`

const Blurb = () => {

    return(
        <BlurbContainer>
            <TopBlurb>
                At Valstice We Are
            </TopBlurb>
            <HeaderBlurb>
                Reimagining social media through the power of the blockchain.
            </HeaderBlurb>
            <SubText>
                We are creating social media 3.0 with influencers, celebrities and creators being able to launch
                their own digital currency by simply creating a profile with media content posted as Non fungible
                Tokens that can be owned and traded on the Valstice network.
            </SubText>
            <Button>
                Learn More
            </Button>
        </BlurbContainer>
    )
}
export default Blurb