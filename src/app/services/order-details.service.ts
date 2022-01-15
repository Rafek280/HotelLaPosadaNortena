import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // fooddetails

  Habitaciones = [
    {
      id:1,
      foodName:"Personal",
      foodDetails:"Máximo un adulto.",
      foodPrice:40,
      foodImg:"assets/img/personal.jpeg"
    },
    {
      id:2,
      foodName:"Matrimonial",
      foodDetails:"Máximo dos adultos",
      foodPrice:60,
      foodImg:"assets/img/matrimonial.jpeg"
    },
    {
      id:3,
      foodName:"Doble simple",
      foodDetails:"Máximo 2 adultos + 1 niño (S/ 10 extra)",
      foodPrice:80,
      foodImg: "assets/img/doblesimple.jpeg"
    },
    {
      id:4,
      foodName:"Doble familiar",
      foodDetails:"Máximo 3 adultos ó 2 adultos + 2 niños",
      foodPrice:100,
      foodImg:"assets/img/doblefamiliar.jpeg"
    },
    {
      id:5,
      foodName:"Triple",
      foodDetails:"3 Adultos, 4 adultos (S/ 10 extra), 2 adultos + 2 niños (S/ 10 extra),  2 adultos + 3 niños (S/ 20 extra), 3 adultos + 1 niño  (S/ 10 extra), 3 adultos + 2 niños (S/ 20 extra)",
      foodPrice:110,
      foodImg:"assets/img/triple.jpeg"
    },
    {
      id:6,
      foodName:"Oreo Cheesecake Ice Cream",
      foodDetails:"Oreo ice cream",
      foodPrice:219,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
    },
    {
      id:7,
      foodName:"test1",
      foodDetails:"Oreo ice cream",
      foodPrice:219,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
    },
    {
      id:8,
      foodName:"test2",
      foodDetails:"Oreo ice cream",
      foodPrice:219,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
    }
  ]

  Platos =[
    {
      id:1,
      foodName:"Personal",
      foodDetails:"Máximo un adulto.",
      foodPrice:40,
      foodImg:"assets/img/personal.jpeg"
    },
    {
      id:2,
      foodName:"Matrimonial",
      foodDetails:"Máximo dos adultos",
      foodPrice:60,
      foodImg:"assets/img/matrimonial.jpeg"
    },
  ]





}
