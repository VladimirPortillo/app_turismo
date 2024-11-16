import { Component, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/interfaces/restaurantes.interface';
import { RestaurantesService } from 'src/app/services/restaurantes.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.page.html',
  styleUrls: ['./restaurantes.page.scss'],
})
export class RestaurantesPage implements OnInit {

  restaurantes: Restaurante[] | any = [];
  loading: boolean = true;

  constructor(
    private restaurantesService: RestaurantesService
  ) { 
  }

  ngOnInit() {
    this.getRestaurantes()
  }
  getRestaurantes() {
    this.restaurantesService.obtenerRestaurantes()
      .subscribe(
        (data) => {
          console.log('restaurates', data.body);
          this.restaurantes = data.body;
          this.loading = false;
        },
        (error) => {
          console.log('error restaurantes', error);          
        }
      );
  }
}
