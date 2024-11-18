import { Component, OnInit,  ViewChild, ElementRef, AfterViewInit } from '@angular/core';
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
export class MapaPage implements OnInit, AfterViewInit {
  @ViewChild('map') mapRef!: ElementRef<HTMLElement>;
  newMap!: GoogleMap;

  datosMarkers: any[] = [];
  center: any = { lat: 40.7128, lng: -74.006 };
  loading: boolean = true;

  constructor(private menuController: MenuController) {}

  ngOnInit() {
    console.log('ngOnInit');
  }

  // Se ejecuta después de que el DOM y las vistas estén listas
  async ngAfterViewInit() {
    console.log('cargando mapa ....');
    await setTimeout(async () => {
      this.datosMarkers.push({
        id_comunidad: 1,
        nombre: 'Comarapa',
        longitud: -117.8,
        latitud: 33.5,
      });
      this.datosMarkers.push({
        id_comunidad: 2,
        nombre: 'Comarapa 2',
        longitud: -117.7,
        latitud: 33.4,
      });
      this.loading = false;
      console.log('2 ==> ', this.datosMarkers);
      await this.createMap();
    }, 5000);
    //this.loading = false;
    //this.loadingMap = true;
    //await this.createMap();
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

    this.markersMap();
  }

  async markersMap() {
    const mapMarkers = this.datosMarkers.map(d => {
      return {
        coordinate: {
          lat: d.latitud,
          lng: d.longitud,
        },
        title: d.nombre,
      };
    });
    
    console.log('mapMarkers', mapMarkers);    
    const markers = await this.newMap.addMarkers(mapMarkers);
    console.log('markers', markers);    
  }

}
