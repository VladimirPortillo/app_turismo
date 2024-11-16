import { Component, OnInit } from '@angular/core';
import { Atractivo } from 'src/app/interfaces/atractivos.interface';
import { AtractivosService } from 'src/app/services/atractivos.service';

@Component({
  selector: 'app-atractivos',
  templateUrl: './atractivos.page.html',
  styleUrls: ['./atractivos.page.scss'],
})
export class AtractivosPage implements OnInit {


  atractivos: Atractivo[] | any = [];
  loading: boolean = true;

  constructor(
    private atractivosService: AtractivosService
  ) { }

  ngOnInit() {
    this.getAtractivos();
  }

  getAtractivos() {
    this.atractivosService.obtenerAtractivos()
      .subscribe(
        (data) => {
          console.log('atractivos', data.body);
          this.atractivos = data.body;
          this.loading = false;
        },
        (error) => {
          console.log('error atractivos', error);          
        }
      );
  }
  
}
