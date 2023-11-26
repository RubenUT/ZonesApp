import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CerroDeLaEstrellaPage } from './cerro-de-la-estrella.page';

describe('CerroDeLaEstrellaPage', () => {
  let component: CerroDeLaEstrellaPage;
  let fixture: ComponentFixture<CerroDeLaEstrellaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CerroDeLaEstrellaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
