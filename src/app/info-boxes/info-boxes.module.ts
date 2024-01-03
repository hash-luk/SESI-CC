import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoBoxesPageRoutingModule } from './info-boxes-routing.module';

import { InfoBoxesPage } from './info-boxes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoBoxesPageRoutingModule
  ],
  declarations: [InfoBoxesPage]
})
export class InfoBoxesPageModule {}
