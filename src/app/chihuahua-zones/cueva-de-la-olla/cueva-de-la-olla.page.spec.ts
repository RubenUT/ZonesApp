import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuevaDeLaOllaPage } from './cueva-de-la-olla.page';

describe('CuevaDeLaOllaPage', () => {
  let component: CuevaDeLaOllaPage;
  let fixture: ComponentFixture<CuevaDeLaOllaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CuevaDeLaOllaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
