import styled from "styled-components"
import { useRef, useState, useEffect } from "react"
import { BebasText } from "../section1/section1-footer"
import koreanFlag from '/KoreanFlag.png'
import { KoreanCarsArray, Car } from "../../../../data/carsData"
import { Text } from "../../../../styled/styled-text"

export const KoreanCars = () => {
    const [carsArray, setCarsArray] = useState<Car[]>(KoreanCarsArray);
    const [currentBigImg, setCurrentBigImg] = useState<number>(0);
    const elementRef = useRef(null);
    const intervalRef = useRef<number>();
    const shiftedCarsArray = useRef<Car[]>([]);
    const handleClickForward = () => {
        setCarsArray((prevCars) => {
            const newCars = [...prevCars];
            const shiftedCar = newCars.shift();
            if (shiftedCar) {
                shiftedCarsArray.current.push(shiftedCar);
            }
            return newCars;
        });
    };

    const handleClickBackwards = () => {
        if (shiftedCarsArray.current.length > 0) {
            const poppedCar = shiftedCarsArray.current.pop();
            if (poppedCar) {
                setCarsArray((prevCars) => [poppedCar, ...prevCars]);
            }
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !intervalRef.current) {
                    const intervalId = setInterval(() => {
                        setCurrentBigImg(prev => {
                            if (prev >= carsArray[0].img.length - 1) {
                                return 0;
                            } else {
                                return prev + 1;
                            }
                        });
                    }, 5000);
                    intervalRef.current = intervalId;
                } else {
                    if (intervalRef.current) {
                        clearInterval(intervalRef.current);
                        intervalRef.current = undefined;
                    }
                }
            },
            {
                threshold: 0.5,
            }
        );

        setCurrentBigImg(0);

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
                clearInterval(intervalRef.current);
                intervalRef.current = undefined;
            }
        };
    }, [carsArray]);
    return (
        <KoreanCarsWrapper>
            <CarPlusBlockWrapper>
                <BigCarWrapper $margin={carsArray.length > 3} >
                    <BigCarOverlay>
                        <CarInfoTop>
                            <BebasTextCarInfo>{carsArray[0].name.toUpperCase()}</BebasTextCarInfo>
                            <InterInfoText>{`${carsArray[0].manufactureDate} • ${carsArray[0].engine} • ${carsArray[0].mileage.toLocaleString()} км`}</InterInfoText>
                        </CarInfoTop>
                        <CarInfoBottom>
                            <BebasTextCarPrice>{`${carsArray[0].price.toLocaleString()} ₽`}</BebasTextCarPrice>
                            <RequestButton ref={elementRef}>
                                <InterButtonText>Оставить заявку</InterButtonText>
                            </RequestButton>
                        </CarInfoBottom>
                        <ImgIndicatorWrapper>      
                            {carsArray[0].img.map((_,ind)=>( 
                                <ImgIndicator key={ind} $selected={currentBigImg===ind}>•</ImgIndicator>
                            ))}
                        </ImgIndicatorWrapper>
                    </BigCarOverlay>
                    <CarIMG src={carsArray[0].img[currentBigImg]} $height={100} $width={100} $radius={28} $flip />
                </BigCarWrapper>
                <DecorativeBlock />
            </CarPlusBlockWrapper>
            <OtherCarsWrapper>
                <TextPlusButtonsWrapper>
                    <BebasTextKoreanCars >
                        ПОПУЛЯРНЫЕ АВТО
                        <br />
                        <BebasTextKoreanCars $red>
                            ИЗ КОРЕИ
                        </BebasTextKoreanCars>
                        <Flag src={koreanFlag} />
                    </BebasTextKoreanCars>
                    <ScrollButtonsWrapper>
                        <ScrollButton onClick={handleClickBackwards} disabled={shiftedCarsArray.current.length === 0}>
                            <svg width="55" height="13" viewBox="0 0 55 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.182324 6.30746L5.80732 0.68246C5.9246 0.565185 6.08366 0.4993 6.24951 0.4993C6.41536 0.4993 6.57443 0.565185 6.6917 0.68246C6.80898 0.799736 6.87486 0.958795 6.87486 1.12465C6.87486 1.2905 6.80898 1.44956 6.6917 1.56683L2.13311 6.12465L54.3745 6.12465C54.5403 6.12465 54.6992 6.1905 54.8165 6.30771C54.9337 6.42492 54.9995 6.58389 54.9995 6.74965C54.9995 6.91541 54.9337 7.07438 54.8165 7.19159C54.6992 7.3088 54.5403 7.37465 54.3745 7.37465L2.13311 7.37465L6.6917 11.9325C6.80898 12.0497 6.87486 12.2088 6.87486 12.3746C6.87486 12.5405 6.80898 12.6996 6.6917 12.8168C6.57442 12.9341 6.41536 13 6.24951 13C6.08366 13 5.9246 12.9341 5.80732 12.8168L0.182324 7.19184C0.124215 7.13379 0.0781141 7.06486 0.0466619 6.98899C0.0152097 6.91311 -0.000979838 6.83178 -0.000979831 6.74965C-0.000979824 6.66751 0.0152098 6.58618 0.0466619 6.51031C0.0781141 6.43444 0.124215 6.36551 0.182324 6.30746Z" fill="white" />
                            </svg>
                        </ScrollButton>
                        {/*Я бы выключал кнопку когда carsArray.length <= 1 но не уверен. Сделал чтобы можно было каждую машину в увеличенном формате увидеть */}
                        <ScrollButton style={{ transform: 'rotate(-180deg)' }} onClick={handleClickForward} disabled={carsArray.length <= 1}>
                            <svg width="55" height="13" viewBox="0 0 55 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.182324 6.30746L5.80732 0.68246C5.9246 0.565185 6.08366 0.4993 6.24951 0.4993C6.41536 0.4993 6.57443 0.565185 6.6917 0.68246C6.80898 0.799736 6.87486 0.958795 6.87486 1.12465C6.87486 1.2905 6.80898 1.44956 6.6917 1.56683L2.13311 6.12465L54.3745 6.12465C54.5403 6.12465 54.6992 6.1905 54.8165 6.30771C54.9337 6.42492 54.9995 6.58389 54.9995 6.74965C54.9995 6.91541 54.9337 7.07438 54.8165 7.19159C54.6992 7.3088 54.5403 7.37465 54.3745 7.37465L2.13311 7.37465L6.6917 11.9325C6.80898 12.0497 6.87486 12.2088 6.87486 12.3746C6.87486 12.5405 6.80898 12.6996 6.6917 12.8168C6.57442 12.9341 6.41536 13 6.24951 13C6.08366 13 5.9246 12.9341 5.80732 12.8168L0.182324 7.19184C0.124215 7.13379 0.0781141 7.06486 0.0466619 6.98899C0.0152097 6.91311 -0.000979838 6.83178 -0.000979831 6.74965C-0.000979824 6.66751 0.0152098 6.58618 0.0466619 6.51031C0.0781141 6.43444 0.124215 6.36551 0.182324 6.30746Z" fill="white" />
                            </svg>
                        </ScrollButton>
                    </ScrollButtonsWrapper>
                </TextPlusButtonsWrapper>
                <SmallerCarsWrapper>
                    {carsArray.map((val, ind) => (
                        ind !== 0 &&
                        <CarPlusBlockWrapper key={ind}>
                            <SmallerCarWrapper>
                                <SmallerCarInfoTop>
                                    <BebasTextCarInfo>{carsArray[ind].name.toUpperCase()}</BebasTextCarInfo>
                                    <InterInfoText>{`${carsArray[ind].manufactureDate} • ${carsArray[ind].engine} • ${carsArray[ind].mileage.toLocaleString()} км`}</InterInfoText>
                                </SmallerCarInfoTop>
                                <CarIMG src={val.img[0]} $width={97} $height={53} $radius={16} />
                                <SmallerCarInfoBottom>
                                    <SmallerBebasTextCarPrice>{`${carsArray[0].price.toLocaleString()} ₽`}</SmallerBebasTextCarPrice>
                                    <RequestButton><InterButtonText>Оставить заявку</InterButtonText></RequestButton>
                                </SmallerCarInfoBottom>
                            </SmallerCarWrapper>
                            <DecorativeBlock />
                        </CarPlusBlockWrapper>
                    ))}
                </SmallerCarsWrapper>
            </OtherCarsWrapper>
        </KoreanCarsWrapper>
    )
}


const FlexContainer = styled.div`
    display: flex;
`;

const FlexColumn = styled(FlexContainer)`
    flex-direction: column;
`;


export const KoreanCarsWrapper = styled(FlexContainer)`
    width: 1920px;
    height: 433px;
    margin: 40px 0 0 120px;
    gap: 16px;
`;

export const BigCarWrapper = styled.div<{ $margin: boolean }>`
    width: 730px;
    height: 100%;
    border-radius: 28px;
    flex-shrink: 0;
    margin-left: ${({ $margin }) => ($margin ? "60px" : "0")};
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform: scale(1.01); /* Для устранения артефактов, без этого не очень выглядит */
        background: linear-gradient(180deg, rgba(1, 18, 36, 0.8) 11.72%, rgba(1, 18, 36, 0) 42%),
            linear-gradient(360deg, rgba(1, 18, 36, 0.8) 0%, rgba(1, 18, 36, 0) 31.21%);
        z-index: 1;
    }
`;

export const BigCarOverlay = styled(FlexColumn)`
    position: absolute;
    z-index: 2;
    height: 100%;
    width: 100%;
`;


export const CarInfoTop = styled(FlexColumn)`
    gap: 8px;
    margin: 28px 0 0 28px;
`;

export const SmallerCarInfoTop = styled(CarInfoTop)`
    margin-top: 16px;
    width: 100%;
`;

export const CarInfoBottom = styled(FlexContainer)`
    justify-content: space-between;
    align-self: center;
    margin: auto 0 28px 0;
    width: 90%;
`;

export const SmallerCarInfoBottom = styled(CarInfoBottom)`
    margin-top: 0;
`;

export const BebasTextCarInfo = styled(BebasText)`
    font-size: 20px;
    text-align: left;
`;

export const BebasTextCarPrice = styled(BebasText)`
    font-size: 36px;
    text-align: left;
`;

export const SmallerBebasTextCarPrice = styled(BebasTextCarPrice)`
    font-size: 24px;
`;

export const InterInfoText = styled(Text)`
    font-size: 18px;
    color: #FFFFFF80;
    font-weight: 400;
    text-align: left;
`;


export const RequestButton = styled.button`
    border: none;
    border-radius: 30px;
    padding: 12px 16px;
    background: #FFFFFF1A;
    backdrop-filter: blur(34px);
    cursor: pointer;

    &:hover {
        background: #D51117;
    }
`;

export const InterButtonText = styled(Text)`
    font-size: 14px;
    color: white;
    font-weight: 600;
`;

export const ScrollButtonsWrapper = styled(FlexContainer)`
    gap: 24px;
    align-self: flex-end;
    margin-bottom: 15px;
`;

export const ScrollButton = styled.button`
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;

    svg path {
        fill: white;
    }

    cursor: pointer;

    &:disabled {
        cursor: default;

        svg path {
            fill: #FFFFFF80;
        }
    }
`;


export const ImgIndicatorWrapper = styled(FlexContainer)`
    gap: 8px;
    margin: -20px 0 10px 0;
    width: 100%;
    justify-content: center;
    user-select: none;
`;

export const ImgIndicator = styled.div<{ $selected?: boolean }>`
    color: ${({ $selected }) => ($selected ? "white" : "#FFFFFF80")};
    font-size: 14px;
`;

export const CarIMG = styled.img<{ $width: number; $height: number; $radius: number; $flip?: boolean }>`
    width: ${({ $width }) => `${$width}%`};
    height: ${({ $height }) => `${$height}%`};
    object-fit: cover;
    border-radius: ${({ $radius }) => `${$radius}px`};
    background: linear-gradient(180deg, rgba(1, 18, 36, 0.8) 11.72%, rgba(1, 18, 36, 0) 42%),
        linear-gradient(360deg, rgba(1, 18, 36, 0.8) 0%, rgba(1, 18, 36, 0) 31.21%);
    transform: ${({ $flip }) => ($flip ? "scaleX(-1)" : "none")};
`;


export const OtherCarsWrapper = styled(FlexColumn)`
    width: 100%;
    height: 100%;
`;

export const TextPlusButtonsWrapper = styled(FlexContainer)`
    justify-content: space-between;
    width: 727px;
`;

export const SmallerCarsWrapper = styled(FlexContainer)`
    gap: 16px;
    margin-top: 6px;
    height: 333px;
`;

export const SmallerCarWrapper = styled(FlexColumn)`
    width: 445px;
    height: 100%;
    border-radius: 24px;
    gap: 16px;
    background: #081E36;
    font-size: 50px;
    flex-shrink: 0;
    align-items: center;
`;


export const DecorativeBlock = styled.div`
    background-color: red;
    width: 80%;
    height: 74px;
    position: absolute;
    bottom: -8px;
    z-index: -2;
    left: 53%;
    transform: translateX(-50%) rotate(-1.1deg);
    border-radius: 28px;
`;

export const CarPlusBlockWrapper = styled.div`
    position: relative;
`;

export const BebasTextKoreanCars = styled(BebasText)<{ $red?: boolean }>`
    font-size: 40px;
    color: ${({ $red }) => ($red ? "#FD554B" : "#FFFFFF4D")};
    text-align: left;
`;

export const Flag = styled.img`
    width: 40px;
    height: 40px;
    object-fit: cover;
    margin-left: 10px;
`;