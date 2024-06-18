import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeasonsPageRoutingModule } from './seasons-routing.module';

import { SeasonsPage } from './seasons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeasonsPageRoutingModule
  ],
  declarations: [SeasonsPage]
})
export class SeasonsPageModule {}
