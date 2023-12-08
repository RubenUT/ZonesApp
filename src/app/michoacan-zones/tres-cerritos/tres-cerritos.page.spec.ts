import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TresCerritosPage } from './tres-cerritos.page';

describe('TresCerritosPage', () => {
  let component: TresCerritosPage;
  let fixture: ComponentFixture<TresCerritosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TresCerritosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
