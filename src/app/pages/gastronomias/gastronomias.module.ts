import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GastronomiasPageRoutingModule } from './gastronomias-routing.module';

import { GastronomiasPage } from './gastronomias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GastronomiasPageRoutingModule
  ],
  declarations: [GastronomiasPage]
})
export class GastronomiasPageModule {}
