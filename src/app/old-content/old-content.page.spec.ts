import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OldContentPage } from './old-content.page';

describe('OldContentPage', () => {
  let component: OldContentPage;
  let fixture: ComponentFixture<OldContentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OldContentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
