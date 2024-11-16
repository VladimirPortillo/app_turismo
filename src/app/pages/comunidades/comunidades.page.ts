import { Component, OnInit } from '@angular/core';
import { Comunidad } from 'src/app/interfaces/comunidades.interface';
import { ComunidadesService } from 'src/app/services/comunidades.service';

@Component({
  selector: 'app-comunidades',
  templateUrl: './comunidades.page.html',
  styleUrls: ['./comunidades.page.scss'],
})
export class ComunidadesPage implements OnInit {

  comunidades: Comunidad[] | any = [];
  loading: boolean = true;

  constructor(
    private comunidadesService: ComunidadesService
  ) { }

  ngOnInit() {
    this.getComunidades();
  }

  getComunidades() {
    this.comunidadesService.obtenerComunidades()
      .subscribe(
        (data) => {
          console.log('comunidades', data.body);
          this.comunidades = data.body;
          this.loading = false;
        },
        (error) => {
          console.log('error comunidades', error);          
        }
      );
  }
  
}
