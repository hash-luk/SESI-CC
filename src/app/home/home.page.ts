import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonModal) modal: IonModal;

  constructor() {   
  }

  redirectTo(page: string):void {
    window.location.href = `${page}`
    this.cancel();
  }

  cancel():void {
    this.modal.dismiss(null, 'cancel');
  }
}
