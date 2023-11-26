import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CerritosDeSanCristobalPage } from './cerritos-de-san-cristobal.page';

describe('CerritosDeSanCristobalPage', () => {
  let component: CerritosDeSanCristobalPage;
  let fixture: ComponentFixture<CerritosDeSanCristobalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CerritosDeSanCristobalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
