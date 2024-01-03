import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoBoxesPage } from './info-boxes.page';

describe('InfoBoxesPage', () => {
  let component: InfoBoxesPage;
  let fixture: ComponentFixture<InfoBoxesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfoBoxesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
