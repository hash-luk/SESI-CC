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
    const experienceContainer01 = document.querySelector(".experience-container-1");

    if(event.detail.checked) {
      experienceContainer01?.setAttribute("style", "display: flex;")
    } else {
      experienceContainer01?.setAttribute("style", "display: none;")
    }
  }
}
