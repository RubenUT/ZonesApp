import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LaVentaPage } from './la-venta.page';

describe('LaVentaPage', () => {
  let component: LaVentaPage;
  let fixture: ComponentFixture<LaVentaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LaVentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
