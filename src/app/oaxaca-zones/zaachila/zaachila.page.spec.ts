import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZaachilaPage } from './zaachila.page';

describe('ZaachilaPage', () => {
  let component: ZaachilaPage;
  let fixture: ComponentFixture<ZaachilaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ZaachilaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
