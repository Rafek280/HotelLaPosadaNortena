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
      foodPrice:70,
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
      foodPrice:120,
      foodImg:"assets/img/triple.jpeg"
    },
  ]

  Platos =[
    {
      id:1,
      platoNombre:"Cubana ",
      platoDescripcion:"Máximo un adulto.",
      platoPrecio:10,
      // foodImg:"assets/img/personal.jpeg"
    },
    {
      id:2,
      platoNombre:"Caldo de gallina ",
      platoDescripcion:"Máximo222 adulto.",
      platoPrecio:12,
      // foodImg:"assets/img/matrimonial.jpeg"
    },
    {
      id:3,
      platoNombre:"Arroz chaufa ",
      platoDescripcion:"Máximo un adulto.",
      platoPrecio:14,
      // foodImg:"assets/img/personal.jpeg"
    },
    {
      id:4,
      platoNombre:"Pollo frito c/ papas fritas y arroz ",
      platoDescripcion:"Máximo222 adulto.",
      platoPrecio:15,
      // foodImg:"assets/img/matrimonial.jpeg"
    },
    {
      id:5,
      platoNombre:"Milanesa de pollo /c papas fritas y arroz ",
      platoDescripcion:"Máximo un adulto.",
      platoPrecio:18,
      // foodImg:"assets/img/personal.jpeg"
    },
    {
      id:6,
      platoNombre:"Bisteck a lo pobre c/ arroz ",
      platoDescripcion:"Máximo222 adulto.",
      platoPrecio:18,
      // foodImg:"assets/img/matrimonial.jpeg"
    },
    {
      id:7,
      platoNombre:"Lomo saltado c/ papas fritas y arroz ",
      platoDescripcion:"Máximo un adulto.",
      platoPrecio:20,
      // foodImg:"assets/img/personal.jpeg"
    },
    {
      id:8,
      platoNombre:"Chuleta de chancho c/ papas fritas y arroz ",
      platoDescripcion:"Máximo222 adulto.",
      platoPrecio:16,
      // foodImg:"assets/img/matrimonial.jpeg"
    },
    {
      id:9,
      platoNombre:"Chuleta de res c/ papas fritas y arroz ",
      platoDescripcion:"Máximo un adulto.",
      platoPrecio:16,
      // foodImg:"assets/img/personal.jpeg"
    },
    {
      id:10,
      platoNombre:"Tortilla vegetaría (verduras de estación) c/arroz ",
      platoDescripcion:"Máximo222 adulto.",
      platoPrecio:10,
      // foodImg:"assets/img/matrimonial.jpeg"
    },
  ]

  Sandwiches =[
    {
      id:1,
      platoNombre:"Palta ",
      platoDescripcion:"Máximo un adulto.",
      platoPrecio:2.50,
      // foodImg:"assets/img/personal.jpeg"
    },
    {
      id:2,
      platoNombre:"Jamonada ",
      platoDescripcion:"Máximo222 adulto.",
      platoPrecio:2.50,
      // foodImg:"assets/img/matrimonial.jpeg"
    },
    {
      id:3,
      platoNombre:"Queso ",
      platoDescripcion:"Máximo un adulto.",
      platoPrecio:2.50,
      // foodImg:"assets/img/personal.jpeg"
    },
    {
      id:4,
      platoNombre:"Pollo ",
      platoDescripcion:"Máximo222 adulto.",
      platoPrecio:5,
      // foodImg:"assets/img/matrimonial.jpeg"
    },
    {
      id:5,
      platoNombre:"Huevo ",
      platoDescripcion:"Máximo un adulto.",
      platoPrecio:2.50,
      // foodImg:"assets/img/personal.jpeg"
    },
    {
      id:6,
      platoNombre:"Chorizo ",
      platoDescripcion:"Máximo222 adulto.",
      platoPrecio:5,
      // foodImg:"assets/img/matrimonial.jpeg"
    },
    {
      id:7,
      platoNombre:"Hot dog ",
      platoDescripcion:"Máximo un adulto.",
      platoPrecio:2.50,
      // foodImg:"assets/img/personal.jpeg"
    },
    {
      id:8,
      platoNombre:"Salchicha ",
      platoDescripcion:"Máximo222 adulto.",
      platoPrecio:5,
      // foodImg:"assets/img/matrimonial.jpeg"
    },
    {
      id:9,
      platoNombre:"Aceituna ",
      platoDescripcion:"Máximo un adulto.",
      platoPrecio:2.5,
      // foodImg:"assets/img/personal.jpeg"
    },
    {
      id:10,
      platoNombre:"Bisteck ",
      platoDescripcion:"Máximo222 adulto.",
      platoPrecio:8,
      // foodImg:"assets/img/matrimonial.jpeg"
    },
    {
      id:11,
      platoNombre:"Mermelada ",
      platoDescripcion:"Máximo222 adulto.",
      platoPrecio:2.5,
      // foodImg:"assets/img/matrimonial.jpeg"
    },
    {
      id:12,
      platoNombre:"Lomo Saltado ",
      platoDescripcion:"Máximo222 adulto.",
      platoPrecio:8,
      // foodImg:"assets/img/matrimonial.jpeg"
    },
  ]

  Omelettes =[
    {
      id:1,
      platoNombre:"Queso con hot dog o jamonada ",
      platoDescripcion:"Máximo un adulto.",
      platoPrecio:10,
      // foodImg:"assets/img/personal.jpeg"
    },
    {
      id:2,
      platoNombre:"Verduras de estación ",
      platoDescripcion:"Máximo222 adulto.",
      platoPrecio:10,
      // foodImg:"assets/img/matrimonial.jpeg"
    },
    {
      id:3,
      platoNombre:"Queso con carne de res ",
      platoDescripcion:"Máximo un adulto.",
      platoPrecio:10,
      // foodImg:"assets/img/personal.jpeg"
    },
    {
      id:4,
      platoNombre:"Queso con pollo ",
      platoDescripcion:"Máximo222 adulto.",
      platoPrecio:10,
      // foodImg:"assets/img/matrimonial.jpeg"
    },
  ]

  BebidasCalientes =[
    {
      id:1,
      platoNombre:"Anís ",
      platoDescripcion:"Máximo un adulto.",
      platoPrecio:2.50,
      // foodImg:"assets/img/personal.jpeg"
    },
    {
      id:2,
      platoNombre:"Manzanilla ",
      platoDescripcion:"Máximo222 adulto.",
      platoPrecio:2.50,
      // foodImg:"assets/img/matrimonial.jpeg"
    },
    {
      id:3,
      platoNombre:"Té negro, verde o de durazno ",
      platoDescripcion:"Máximo un adulto.",
      platoPrecio:2.50,
      // foodImg:"assets/img/personal.jpeg"
    },
    {
      id:4,
      platoNombre:"Café ",
      platoDescripcion:"Máximo222 adulto.",
      platoPrecio:4,
      // foodImg:"assets/img/matrimonial.jpeg"
    },
    {
      id:5,
      platoNombre:"Leche ",
      platoDescripcion:"Máximo222 adulto.",
      platoPrecio:5,
      // foodImg:"assets/img/matrimonial.jpeg"
    },
    {
      id:6,
      platoNombre:"Leche con café ",
      platoDescripcion:"Máximo222 adulto.",
      platoPrecio:5,
      // foodImg:"assets/img/matrimonial.jpeg"
    },
    {
      id:7,
      platoNombre:"Leche con cacao ",
      platoDescripcion:"Máximo222 adulto.",
      platoPrecio:5,
      // foodImg:"assets/img/matrimonial.jpeg"
    },
  ]

  BebidasFriasVaso =[
    {
      id:1,
      platoNombre:"Lima ",
      platoDescripcion:"Máximo un adulto.",
      platoPrecio:3,
      // foodImg:"assets/img/personal.jpeg"
    },
    {
      id:2,
      platoNombre:"Maracuyá ",
      platoDescripcion:"Máximo222 adulto.",
      platoPrecio:3,
      // foodImg:"assets/img/matrimonial.jpeg"
    },
    {
      id:3,
      platoNombre:"Limonada ",
      platoDescripcion:"Máximo un adulto.",
      platoPrecio:3,
      // foodImg:"assets/img/personal.jpeg"
    },
  ]

  BebidasFriasJarra =[
    {
      id:1,
      platoNombre:"Lima ",
      platoDescripcion:"Máximo un adulto.",
      platoPrecio:10,
      // foodImg:"assets/img/personal.jpeg"
    },
    {
      id:2,
      platoNombre:"Maracuyá ",
      platoDescripcion:"Máximo222 adulto.",
      platoPrecio:10,
      // foodImg:"assets/img/matrimonial.jpeg"
    },
    {
      id:3,
      platoNombre:"Limonada ",
      platoDescripcion:"Máximo un adulto.",
      platoPrecio:10,
      // foodImg:"assets/img/personal.jpeg"
    },
    {
      id:4,
      platoNombre:"Jugo surtido ",
      platoDescripcion:"Máximo222 adulto.",
      platoPrecio:12,
      // foodImg:"assets/img/matrimonial.jpeg"
    },
    {
      id:5,
      platoNombre:"Agua mineral ",
      platoDescripcion:"Máximo222 adulto.",
      platoPrecio:2,
      // foodImg:"assets/img/matrimonial.jpeg"
    },
    {
      id:6,
      platoNombre:"Gaseosa ½ litro ",
      platoDescripcion:"Máximo222 adulto.",
      platoPrecio:2,
      // foodImg:"assets/img/matrimonial.jpeg"
    },
  ]

  JugosVaso =[
    {
      id:1,
      platoNombre:"Piña ",
      platoDescripcion:"Máximo un adulto.",
      platoPrecio:4,
      // foodImg:"assets/img/personal.jpeg"
    },
    {
      id:2,
      platoNombre:"Surtido ",
      platoDescripcion:"Máximo222 adulto.",
      platoPrecio:4,
      // foodImg:"assets/img/matrimonial.jpeg"
    },
    {
      id:3,
      platoNombre:"Papaya ",
      platoDescripcion:"Máximo un adulto.",
      platoPrecio:4,
      // foodImg:"assets/img/personal.jpeg"
    },
    {
      id:4,
      platoNombre:"Melón ",
      platoDescripcion:"Máximo222 adulto.",
      platoPrecio:4,
      // foodImg:"assets/img/matrimonial.jpeg"
    },
    {
      id:5,
      platoNombre:"Guanabana ",
      platoDescripcion:"Máximo un adulto.",
      platoPrecio:6,
      // foodImg:"assets/img/personal.jpeg"
    },
    {
      id:6,
      platoNombre:"Mango ",
      platoDescripcion:"Máximo222 adulto.",
      platoPrecio:5,
      // foodImg:"assets/img/matrimonial.jpeg"
    },
    {
      id:7,
      platoNombre:"Fresa ",
      platoDescripcion:"Máximo un adulto.",
      platoPrecio:6,
      // foodImg:"assets/img/personal.jpeg"
    },
    {
      id:8,
      platoNombre:"Durazno ",
      platoDescripcion:"Máximo222 adulto.",
      platoPrecio:8,
      // foodImg:"assets/img/matrimonial.jpeg"
    },
  ]

  JugosLecheVaso =[
    {
      id:1,
      platoNombre:"Especial ",
      platoDescripcion:"Máximo un adulto.",
      platoPrecio:8,
      // foodImg:"assets/img/personal.jpeg"
    },
    {
      id:2,
      platoNombre:"Fresa ",
      platoDescripcion:"Máximo222 adulto.",
      platoPrecio:8,
      // foodImg:"assets/img/matrimonial.jpeg"
    },
    {
      id:3,
      platoNombre:"Plátano ",
      platoDescripcion:"Máximo un adulto.",
      platoPrecio:8,
      // foodImg:"assets/img/personal.jpeg"
    },
    {
      id:4,
      platoNombre:"Mango ",
      platoDescripcion:"Máximo222 adulto.",
      platoPrecio:8,
      // foodImg:"assets/img/matrimonial.jpeg"
    },
  ]

  TestLoop =[
    {
      id:1,
      platoNombre:"Lima ",
      platoDescripcion:"Máximo un adulto.",
      platoPrecio:3,
      // foodImg:"assets/img/personal.jpeg"
    },
    {
      id:1,
      platoNombre:"Lima ",
      platoDescripcion:"Máximo un adulto.",
      platoPrecio:3,
      // foodImg:"assets/img/personal.jpeg"
    },
  ]

}
