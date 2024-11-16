import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  constructor(
    private navCtl: NavController
  ) {}

  navComunidades() {
    this.navCtl.navigateForward('comunidades')
  }
  navRestaurantes() {
    this.navCtl.navigateForward('restaurantes')
  }
  navHoteles() {
    this.navCtl.navigateForward('hoteles')
  }
  navGastronomias() {
    this.navCtl.navigateForward('gastronomias')
  }
  navActividades() {
    this.navCtl.navigateForward('actividades')
  }
  navAtractivos() {
    this.navCtl.navigateForward('atractivos')
  }
  navMapa() {
    this.navCtl.navigateForward('mapa')
  }
}
