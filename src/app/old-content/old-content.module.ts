import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OldContentPageRoutingModule } from './old-content-routing.module';

import { OldContentPage } from './old-content.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OldContentPageRoutingModule
  ],
  declarations: [OldContentPage]
})
export class OldContentPageModule {}
