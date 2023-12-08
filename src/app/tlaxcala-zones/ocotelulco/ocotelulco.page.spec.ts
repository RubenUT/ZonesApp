import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OcotelulcoPage } from './ocotelulco.page';

describe('OcotelulcoPage', () => {
  let component: OcotelulcoPage;
  let fixture: ComponentFixture<OcotelulcoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OcotelulcoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
