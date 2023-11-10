import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {
  constructor() {
  }

  ngOnInit() {}

  showOthersInput(event: any): void {
    const otherOptionsInput = document.querySelector(".other-options-input");

    if(event.detail.value == 2) {
      otherOptionsInput?.setAttribute("style", "display: block;")
    } else {
      otherOptionsInput?.setAttribute("style", "display: none;")
    }
  }
}
