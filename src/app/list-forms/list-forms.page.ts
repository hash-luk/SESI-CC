import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-forms',
  templateUrl: './list-forms.page.html',
  styleUrls: ['./list-forms.page.scss'],
})
export class ListFormsPage implements OnInit {
  forms: number[] = [];

  constructor() { 
    for(let i = 1; i <= 8; i++) {
      this.forms.push(i);
    }
  }

  ngOnInit() {
  }

}
