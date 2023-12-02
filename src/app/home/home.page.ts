import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonModal) modal: IonModal;
  public isLoading: boolean = false;

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
