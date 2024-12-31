import styled from "styled-components"
import logo from '/logo.png'
import { useUnit } from "effector-react";
import { $isMobile } from "../../store/is-mobile-store";
import '@fontsource/inter';

export const Navigation = () => {
    const mobile = useUnit($isMobile)
    return (
        <NavWrapper>
            <CarLogo />
            {!mobile ? (
                <TextWrapper>
                    <NavText>Авто из Кореи</NavText>
                    <NavText>Авто из Китая</NavText>
                    <NavText>Авто из Японии</NavText>
                    <NavText>Контакты</NavText>
                </TextWrapper>
            ) : (
                <TraySVGWrapper>
                    <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.5011 7C18.5011 7.19891 18.4221 7.38968 18.2814 7.53033C18.1408 7.67098 17.95 7.75 17.7511 7.75H1.2511C1.05219 7.75 0.861421 7.67098 0.720769 7.53033C0.580116 7.38968 0.501099 7.19891 0.501099 7C0.501099 6.80109 0.580116 6.61032 0.720769 6.46967C0.861421 6.32902 1.05219 6.25 1.2511 6.25H17.7511C17.95 6.25 18.1408 6.32902 18.2814 6.46967C18.4221 6.61032 18.5011 6.80109 18.5011 7ZM1.2511 1.75H17.7511C17.95 1.75 18.1408 1.67098 18.2814 1.53033C18.4221 1.38968 18.5011 1.19891 18.5011 1C18.5011 0.801088 18.4221 0.610322 18.2814 0.46967C18.1408 0.329018 17.95 0.25 17.7511 0.25H1.2511C1.05219 0.25 0.861421 0.329018 0.720769 0.46967C0.580116 0.610322 0.501099 0.801088 0.501099 1C0.501099 1.19891 0.580116 1.38968 0.720769 1.53033C0.861421 1.67098 1.05219 1.75 1.2511 1.75ZM17.7511 12.25H1.2511C1.05219 12.25 0.861421 12.329 0.720769 12.4697C0.580116 12.6103 0.501099 12.8011 0.501099 13C0.501099 13.1989 0.580116 13.3897 0.720769 13.5303C0.861421 13.671 1.05219 13.75 1.2511 13.75H17.7511C17.95 13.75 18.1408 13.671 18.2814 13.5303C18.4221 13.3897 18.5011 13.1989 18.5011 13C18.5011 12.8011 18.4221 12.6103 18.2814 12.4697C18.1408 12.329 17.95 12.25 17.7511 12.25Z" fill="white" />
                    </svg>
                </TraySVGWrapper>
            )}

        </NavWrapper>
    )
}


const CarLogo = styled.div`
   background-image: url(${logo});
    width: 80px;
    height: 80px;
    background-size: 150%;
    background-position: 30% 0%;
    background-repeat: no-repeat;
    border-radius: 45%;
    overflow: hidden;
    margin-bottom: 15px;
    @media (max-width:670px) {
        width: 60px;
        height: 60px;
    }
    @media (max-width:520px) {
        width: 50px;
        height: 50px;
        margin-bottom: 0;
    }

`
const NavWrapper = styled.nav`
    display: flex;
    height: 100%;
    align-items: center;
    @media (max-width:520px) {
        justify-content: space-between;
        width: 95%;
    }
    
`
const TextWrapper = styled.div`
    display: flex;
    gap: 40px;
    margin-left: 60px;
    @media (max-width:820px) {
        gap: 15px;
        margin-left: 30px;
    }
`
const TraySVGWrapper = styled.button`
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
`
// Кнопки потому что при нажатии будет редирект, думаю так правильнее
const NavText = styled.button`
font-family: 'Inter', sans-serif;
font-size: 16px;
font-weight: 600;
text-decoration-skip-ink: none;
color: #FFFFFFB2;
cursor: pointer;
background: transparent;
border: none;
@media (max-width:1280px) {
        font-size: 14px;
    }
@media (max-width:820px) {
        font-size: 13px;
    }
`