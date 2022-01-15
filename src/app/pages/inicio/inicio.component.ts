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
  ngOnInit(): void {
    this.foodData = this.service.Habitaciones;
    this.platoData = this.service.Platos;
  }

}
