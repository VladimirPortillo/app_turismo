import { Component, OnInit } from '@angular/core';
import { Gastronomia } from 'src/app/interfaces/gastronomias.interface';
import { GastronomiasService } from 'src/app/services/gastronomias.service';

@Component({
  selector: 'app-gastronomias',
  templateUrl: './gastronomias.page.html',
  styleUrls: ['./gastronomias.page.scss'],
})
export class GastronomiasPage implements OnInit {

  gastronomias: Gastronomia[] | any = [];
  loading: boolean = true;
  constructor(private gastronomiasService: GastronomiasService) { }

  ngOnInit() {
    this.getGastronomias();
  }
  getGastronomias() {
    this.gastronomiasService.obtenerGastronomias()
      .subscribe(
        (data) => {
          console.log('gastronomias', data.body);
          this.gastronomias = data.body;
          this.loading = false;
        },
        (error) => {
          console.log('error gastronomias', error);          
        }
      );
  }
  

}
