import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-old-content',
  templateUrl: './old-content.page.html',
  styleUrls: ['./old-content.page.scss'],
})
export class OldContentPage implements OnInit {

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
