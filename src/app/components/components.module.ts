import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppBarComponent } from './app-bar/app-bar.component';



@NgModule({
  declarations: [
    AppBarComponent
  ],
  exports:[
    AppBarComponent
  ],


  imports: [
    CommonModule
  ]
})

export class ComponentsModule { }
