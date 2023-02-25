import React from "react";
import styled from "styled-components";
import vect from '../../assets/images/Vector.png';
import vect2 from '../../assets/images/Vector-2.png';
import vect3 from '../../assets/images/Vector-3.png';
import vect4 from '../../assets/images/Vector-4.png';
import person1 from '../../assets/images/person1.png';
import person2 from '../../assets/images/person2.png';




const VectContainer = styled.div`
    position: absolute;
    z-index: -4;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    top: 0;
    left: 25px;
    
    
    

`
const Vect1 = styled.img`
    position: absolute;
    top: -10px;
    height: 800px;
    width: 1000px;
    left: 445px;
    z-index: -2;
  
`
const Vect2 = styled.img`
    position: absolute;
    top: -63px;
    height: 800px;
    width: 1000px;
    left: 545px;
    transform: rotate(2.8deg);
    z-index: -1;
`
const Vect3 = styled.img`
    position: absolute;
    top: -80px;
    height: 800px;
    width: 1000px;
    left: 695px;
    transform: rotate(28.8deg);
    z-index: 0;
`
const Vect4 = styled.img`
    position: absolute;
    top: 0;
    height: 800px;
    width: 1000px;
    left: 345px;
    transform: rotate(0.5deg);
    z-index: -3;

`
const Person1 = styled.img`
    position: absolute;
    top: 290px;
    height: 400px;
    width: 250px;
    left: 990px;
    z-index: 2;

`
const Person2 = styled.img`
  position: absolute;
  top: 290px;
  height: 400px;
  width: 360px;
  left: 1090px;
  z-index: 1;
`

const Vector = () =>{

    return(
        <VectContainer>

            <Vect3 src={vect3}/>
            <Vect2 src={vect2}/>
            <Vect1 src={vect}/>
            <Vect4 src={vect4}/>
            <Person1 src={person1}/>
            <Person2 src={person2}/>

        </VectContainer>
    )
}
export default Vector




