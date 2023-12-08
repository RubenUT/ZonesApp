import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CerroDeLasVentanasPage } from './cerro-de-las-ventanas.page';

describe('CerroDeLasVentanasPage', () => {
  let component: CerroDeLasVentanasPage;
  let fixture: ComponentFixture<CerroDeLasVentanasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CerroDeLasVentanasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
