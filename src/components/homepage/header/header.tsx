import styled from "styled-components";
import { Navigation } from "./nav";
import { Contacts } from "./contact-info";
import { useUnit } from "effector-react";
import { $isMobile } from "../../store/is-mobile-store";
export const Header=() => {
    const mobile=useUnit($isMobile)
  return(
    <StyledHeader>
        {!mobile ?(
            <>
            <Navigation/>
            <Contacts/>
            </>
        ):(
            <Navigation/>  
        )}
        
    </StyledHeader>
  )
}

const StyledHeader=styled.header`
    width: 87.5vw;
    height: 80px;
    display: flex;
    align-items: center;
    margin-top: 24px;
    justify-content: space-between;
    @media (max-width:1280px) {
        width: 930px;
    }
    @media (max-width:820px) {
        width: 100vw;
    }
    @media (max-width:520px) {
        margin-top:0px;
        border-bottom: 1px solid #FFFFFF29
    }
`
