import styled from "styled-components";
import { Text } from "../../../../styled/styled-text";
import '@fontsource/bebas-neue'
export const CalcPrice=() => {
  return(
    <CalcWrapper>

            <StyledH1>АВТОМОБИЛЬ ВАШЕЙ МЕЧТЫ ЗДЕСЬ</StyledH1>
            <PriceText>Прозрачное ценообразование с подробным<br/>разъяснением затрат на каждом этапе</PriceText>
            <StyledButton><ButtonText>Рассчитать стоимость</ButtonText></StyledButton>
    </CalcWrapper>
  )
}

const CalcWrapper = styled.div`
  z-index: 2;
  align-self: center;
  margin-top:200px;
  display: flex;
  flex-direction: column;
  gap: 46px;
  align-items: center;
  justify-self: flex-start;
  position: absolute;

  @media (max-width: 768px) {
    margin-top: 100px;
    gap: 30px;
  }

  @media (max-width: 520px) {
    margin-top: 20px;
    gap:12px ;
  }
`;
// не знаю почему но с размером шрифта 64px текст был ну уж слишком огромный
const StyledH1=styled.h1`
    font-family: 'bebas-neue',sans-serif;
    font-weight: 700;
    font-size: 40px;
    text-align: center;
    color: white;
    margin: 0 auto;
    @media (max-width: 768px) {
    font-size: 28px;
  }
    @media (max-width: 520px) {
    font-size:18px;
  }
`
const PriceText=styled(Text)`
    font-weight: 400;
    font-size: 24px;
    text-align: center;
    @media (max-width: 768px) {
    font-size: 18px;
  }
    @media (max-width: 520px) {
    font-size:14px;
  }
`
const ButtonText=styled(Text)`
    font-weight: 600;
    font-size: 18px;
    text-align: center;
    @media (max-width: 520px) {
        font-size:16px;
  }
`
const StyledButton=styled.button`
    background: linear-gradient(94.98deg, #0D2F68 0%, #D51117 100%);
padding: 24px 40px 24px 40px;
gap: 12px;
border-radius: 60px;
border: none;
width: 328px;

cursor: pointer;
@media (max-width: 768px) {
    padding: 16px 40px 16px 40px;
  }
    @media (max-width: 520px) {
        padding: 12px 40px 12px 40px;
  }
`

