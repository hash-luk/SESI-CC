import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListFormsPageRoutingModule } from './list-forms-routing.module';

import { ListFormsPage } from './list-forms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListFormsPageRoutingModule
  ],
  declarations: [ListFormsPage]
})
export class ListFormsPageModule {}
