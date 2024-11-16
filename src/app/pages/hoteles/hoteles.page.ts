import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/interfaces/hoteles.interface';
import { HotelesService } from 'src/app/services/hoteles.service';

@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.page.html',
  styleUrls: ['./hoteles.page.scss'],
})
export class HotelesPage implements OnInit {

  hoteles: Hotel[] | any = [];
  loading: boolean = true;
  constructor(private hotelesService: HotelesService) { }

  ngOnInit() {
    this.getHoteles();
  }
  getHoteles() {
    this.hotelesService.obtenerHoteles()
      .subscribe(
        (data) => {
          console.log('hoteles', data.body);
          this.hoteles = data.body;
          this.loading = false;
        },
        (error) => {
          console.log('error hoteles', error);          
        }
      );
  }
}
