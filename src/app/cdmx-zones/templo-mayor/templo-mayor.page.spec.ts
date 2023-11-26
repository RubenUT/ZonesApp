import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TemploMayorPage } from './templo-mayor.page';

describe('TemploMayorPage', () => {
  let component: TemploMayorPage;
  let fixture: ComponentFixture<TemploMayorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TemploMayorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
