import styled from "styled-components"
import { CarElement } from "./car-element"
import { CalcPrice } from "./calculate-price-element";
import { SectionFooter } from "./section1-footer";

export const Section1=() => {
  return(
    <Section1Wrapper>
        <CarElement/>
        <CalcPrice/>
        <SectionFooter/>
    </Section1Wrapper>
  )
}

const Section1Wrapper=styled.section`
    display: flex;
    flex-direction: column;
    width: 100vw;
    position: relative;
    z-index: 1;
    height: 950px;
    
`