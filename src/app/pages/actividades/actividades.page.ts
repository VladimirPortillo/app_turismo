import { Component, OnInit } from '@angular/core';
import { Actividad } from 'src/app/interfaces/actividades.interface';
import { ActividadesService } from 'src/app/services/actividades.service';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.page.html',
  styleUrls: ['./actividades.page.scss'],
})
export class ActividadesPage implements OnInit {

  actividades: Actividad[] | any = [];
  loading: boolean = true;

  constructor(
    private actividadesService: ActividadesService
  ) { }

  ngOnInit() {
    this.getActividades();
  }

  getActividades() {
    this.actividadesService.obtenerActividades()
      .subscribe(
        (data) => {
          console.log('actividades', data.body);
          this.actividades = data.body;
          this.loading = false;
        },
        (error) => {
          console.log('error actividades', error);          
        }
      );
  } 
}
