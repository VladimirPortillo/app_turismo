import { Component, OnInit,  ViewChild, ElementRef } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { MenuController } from '@ionic/angular';
import { environment } from 'src/environments/environment.prod';
const apiKey=environment.apiKey;
declare const google: any;


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  @ViewChild('map')
  mapRef!: ElementRef<HTMLElement>;
  newMap!: GoogleMap;

  constructor(private menuController:MenuController){
   }

  ngOnInit() {
  }

  async createMap() {
    this.newMap = await GoogleMap.create({
      id: 'my-cool-map',
      element: this.mapRef.nativeElement,
      apiKey: environment.apiKey,
      config: {
        center: {
          lat: 33.6,
          lng: -117.9,
        },
        zoom: 8,
      },
    });
  }

}
