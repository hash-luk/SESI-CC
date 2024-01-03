import { Component, OnInit,ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-info-boxes',
  templateUrl: './info-boxes.page.html',
  styleUrls: ['./info-boxes.page.scss'],
})
export class InfoBoxesPage implements OnInit {

  @ViewChild(IonModal) modal: IonModal;
  public isLoading: boolean = false;

  constructor() { }

  redirectTo(page: string):void {
    window.location.href = `${page}`
    this.cancel();
  }

  cancel():void {
    this.modal.dismiss(null, 'cancel');
  }

  ngOnInit() {
  }

}
