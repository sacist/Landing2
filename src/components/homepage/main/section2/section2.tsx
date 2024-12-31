import styled from "styled-components"
import { KoreanCars } from "./korean-cars"

export const Section2=() => {
  return(
    <Section2Wrapper>
        <KoreanCars></KoreanCars>
    </Section2Wrapper>
  )
}

const Section2Wrapper=styled.section`
    width: 100vw;
    display: flex;
    justify-content: center;
`
