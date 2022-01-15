import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  constructor(private service:OrderDetailsService) { }
  foodData:any;
  platoData:any;
  sandwichData:any;
  
  ngOnInit(): void {
    this.foodData = this.service.Habitaciones;
    this.platoData = this.service.Platos;
    this.sandwichData = this.service.Sandwiches;
  }

}
