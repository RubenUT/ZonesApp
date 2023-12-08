import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HuapocaPage } from './huapoca.page';

describe('HuapocaPage', () => {
  let component: HuapocaPage;
  let fixture: ComponentFixture<HuapocaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HuapocaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
