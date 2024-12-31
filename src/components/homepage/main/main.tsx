import styled from "styled-components"
import { Section1 } from "../main/section1/section1"
import { Section2 } from "../main/section2/section2"
export const Main=() => {
  return(
    <StyledMain>
        <Section1/>
        <Section2/>
    </StyledMain>
  )
}

const StyledMain=styled.main`
    
`