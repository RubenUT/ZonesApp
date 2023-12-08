import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuarentaCasasPage } from './cuarenta-casas.page';

describe('CuarentaCasasPage', () => {
  let component: CuarentaCasasPage;
  let fixture: ComponentFixture<CuarentaCasasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CuarentaCasasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
