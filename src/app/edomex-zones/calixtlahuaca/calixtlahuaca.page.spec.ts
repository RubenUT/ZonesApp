import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalixtlahuacaPage } from './calixtlahuaca.page';

describe('CalixtlahuacaPage', () => {
  let component: CalixtlahuacaPage;
  let fixture: ComponentFixture<CalixtlahuacaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CalixtlahuacaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
