import encar from '/encar.png'
import koreanBigCar from '/koreanBigCar.jpg'

export interface Car {
    img: string[];
    name: string;
    manufactureDate: number;
    engine: string;
    mileage: number;
    price:number;
}

export const KoreanCarsArray: Car[] =[{
    img:[koreanBigCar,encar,koreanBigCar,encar,koreanBigCar,koreanBigCar],
    name:'Subaru LEVORG VN5',
    manufactureDate:2021,
    engine:'Гибрид',
    mileage:10000,
    price:2115600 
},
{
    img:[encar,koreanBigCar,encar,koreanBigCar,encar,koreanBigCar],
    name:'Subaru LEVORG VN5',
    manufactureDate:2021,
    engine:'Гибрид',
    mileage:10000,
    price:2115600
},
{
    img:[encar],
    name:'Subaru LEVORG VN5',
    manufactureDate:2021,
    engine:'Гибрид',
    mileage:10000,
    price:2115600
},
{
    img:[encar],
    name:'Subaru LEVORG VN5',
    manufactureDate:2021,
    engine:'Гибрид',
    mileage:10000,
    price:2115600
},
{
    img:[encar],
    name:'Subaru LEVORG VN5',
    manufactureDate:2021,
    engine:'Гибрид',
    mileage:10000,
    price:2115600
},
{
    img:[encar],
    name:'Subaru LEVORG VN5',
    manufactureDate:2021,
    engine:'Гибрид',
    mileage:10000,
    price:2115600
},]