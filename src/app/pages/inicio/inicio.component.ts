import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private service:OrderDetailsService) { }
  foodData:any;
  platoData:any;
  sandwichData:any;
  omeletteData:any;
  bebidasCalientesData:any;
  bebidasFriasVasoData:any;
  bebidasFriasJarraData:any;
  jugosVasoData:any;
  jugosLecheVasoData:any;
  testLoop:any;

  ngOnInit(): void {
    this.foodData = this.service.Habitaciones;
    this.platoData = this.service.Platos;
    this.sandwichData = this.service.Sandwiches;
    this.omeletteData = this.service.Omelettes;
    this.bebidasCalientesData = this.service.BebidasCalientes;
    this.bebidasFriasVasoData = this.service.BebidasFriasVaso;
    this.bebidasFriasJarraData = this.service.BebidasFriasJarra;
    this.jugosVasoData = this.service.JugosVaso;
    this.jugosLecheVasoData = this.service.JugosLecheVaso;
    this.testLoop = this.service.TestLoop;
  }

}
