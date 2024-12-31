import styled from "styled-components"
import '@fontsource/bebas-neue'
import { Text } from "../../../../styled/styled-text"
import { useUnit } from "effector-react"
import { $isMobile } from "../../../store/is-mobile-store"

export const SectionFooter = () => {
    const mobile=useUnit($isMobile)
    return (
        <FooterWrapper>
            <InfoWrapper>
                <InfoItemWrapper>
                    <BebasText>5+</BebasText>
                    <InterText>Лет на рынке</InterText>
                </InfoItemWrapper>
                <InfoItemWrapper>
                    <BebasText>4 000 +</BebasText>
                    <InterText>довольных клиентов</InterText>
                </InfoItemWrapper>
                <RatingWrapper>
                    <StarText>⭐</StarText>
                    <BebasText>4.9</BebasText>
                </RatingWrapper>
            </InfoWrapper>
            {!mobile&&     
            <EconomyWrapper>
                <EconomyText>
                    Экономия до
                    <PercentSpan> 30%</PercentSpan>
                    <br />
                    от рынка авто в наличии
                </EconomyText>
                <EconomyButton>
                    <EconomyButtonText>Смотреть пример</EconomyButtonText>
                </EconomyButton>
            </EconomyWrapper>
            }
        </FooterWrapper>
    )
}

const FooterWrapper = styled.div`
    position: absolute;
    height: 240px;
    width: 87.5vw;
    z-index: 2;
    margin-top: 710px;
    display: flex;
    align-items: flex-end;
    margin-left: 6.25%;
    justify-content: space-between;
    border-bottom: 1px solid #344150;

    @media (max-width: 768px) {
        margin-top: 600px; 
        width: 100vw;
        margin-left: 0; 
        height: auto;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px 0;
    }

    @media (max-width: 520px) {
        margin-top: 160px;
        width: 100vw;
        margin-left: 0;
        height: auto;
        gap: 0;
        border-bottom: none;
    }
`

const InfoWrapper = styled.div`
    display: flex;
    gap: 40px;
    margin-bottom: 40px;

    @media (max-width: 768px) {
        gap: 20px;
        margin-bottom: 20px;
    }

    @media (max-width: 520px) {
        gap: 8px;
        margin-bottom: 15px;
    }
`

const InfoItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-right: 1px solid #FFFFFF29;
    gap: 4px;
    padding-right: 40px;

    @media (max-width: 768px) {
        padding-right: 20px;
    }
`

export const BebasText = styled.span`
    font-family: 'bebas-neue', sans-serif;
    font-size: 48px;
    font-weight: 700;
    text-align: center;
    color: white;

    @media (max-width: 768px) {
        font-size: 36px;
    }

    @media (max-width: 520px) {
        font-size: 14px;
    }
`

const InterText = styled(Text)`
    font-size: 14px;
    color: #FFFFFF80;
    text-align: center;
    font-weight: 400;

    @media (max-width: 768px) {
        font-size: 12px;
    }

    @media (max-width: 520px) {
        font-size: 10px;
    }
`

const RatingWrapper = styled.div`
    display: flex;
    gap: 12px;

    @media (max-width: 768px) {
        gap: 8px;
    }

    @media (max-width: 520px) {
        gap: 6px;
    }
`

const StarText = styled(BebasText)`
    font-size: 25px;

    @media (max-width: 768px) {
        font-size: 20px;
    }

    @media (max-width: 520px) {
        font-size: 14px;
    }
`

const EconomyWrapper = styled.div`
    background: #081E36;
    backdrop-filter: blur(23px);
    width: 325px;
    height: 199px;
    gap: 24px;
    border-radius: 28px;
    margin-left: auto;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        width: 280px;
        height: 180px;
        margin-left: 0;
        margin-bottom: 30px;
    }

    @media (max-width: 520px) {
        width: 220px;
        height: 150px;
        margin-bottom: 20px;
    }
`

const PercentSpan = styled(InterText)`
    font-weight: 900;
    font-size: 48px;
    color: #FD554B;

    @media (max-width: 768px) {
        font-size: 36px;
    }

    @media (max-width: 520px) {
        font-size: 28px;
    }
`

const EconomyText = styled(InterText)`
    font-size: 24px;
    color: white;
    text-align: left;
    margin-top: 16px;

    @media (max-width: 768px) {
        font-size: 18px;
    }

    @media (max-width: 520px) {
        font-size: 16px;
    }
`

const EconomyButton = styled.button`
    background: linear-gradient(94.98deg, #0D2F68 0%, #D51117 100%);
    border: none;
    padding: 12px 24px 12px 24px;
    gap: 12px;
    border-radius: 60px;
    opacity: 0px;
    width: 293px;
    height: 44px;
    cursor: pointer;
    @media (max-width: 768px) {
        width: 250px;
    }

    @media (max-width: 520px) {
        width: 200px;
    }
`

const EconomyButtonText = styled(InterText)`
    font-weight: 600;
    color: white;
`
