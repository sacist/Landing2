import styled from "styled-components";
import '@fontsource/inter';
import car from '/carMobile.png'
import carFrame from '/CarFrame.png'
import { useUnit } from "effector-react";
import { $isMobile } from "../../../store/is-mobile-store";
export const CarElement = () => {
  const mobile = useUnit($isMobile);
  return (
      <>
          {!mobile ? (
              <CarElemWrapper>
                  <CarImgWrapper>
                      <CarIMG src={carFrame} alt="Машина в дыму"/>
                  </CarImgWrapper>
              </CarElemWrapper>
          ) : (
              <CarImgWrapper>
                  <CarIMG src={car} alt="Car" />
              </CarImgWrapper>
          )}
      </>
  );
};

const CarElemWrapper = styled.div`
  height: 825px;
  position: relative;
  display: flex;
  @media (max-width: 768px) {
    height: 230px; 
  }
  user-select: none;
`;



const CarImgWrapper = styled.div`
  width: 100%;
  position: relative; 
  z-index: 0;
  height: 825px;

  @media (max-width: 520px) {
    width: 100%;
    height: 230px;
    margin-left: 0;
  }
`;

const CarIMG = styled.img`
  width: 100%;
  object-fit: 80%;
  z-index: 1;
  max-height: 100%;

  @media (max-width: 910px) {
    object-fit: contain;
    width: 100%;
  }
`;