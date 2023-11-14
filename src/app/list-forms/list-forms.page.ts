import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-forms',
  templateUrl: './list-forms.page.html',
  styleUrls: ['./list-forms.page.scss'],
})
export class ListFormsPage implements OnInit {
  forms: number[] = [];
  formsTitle: string[] = [
    'HIstória da minha vida',
    'Ocupação no tempo livre',
    'Participação em atividades sociais',
    'Principais atividades profissionais e aprendizagens',
    'Linguagens, códigos e suas tecnologias',
    'Matemática e suas tecnologias',
    'Ciências da natureza e suas tecnologias',
    'Ciências humanas e suas tecnologias'
  ];

  constructor() {
    for (let i = 1; i <= 8; i++) {
      this.forms.push(i);
    }
  }

  ngOnInit() {}

  redirectTo(page: string): void {
    window.location.href = `${page}`;
  }
}
