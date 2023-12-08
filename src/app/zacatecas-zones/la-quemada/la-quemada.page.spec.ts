import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LaQuemadaPage } from './la-quemada.page';

describe('LaQuemadaPage', () => {
  let component: LaQuemadaPage;
  let fixture: ComponentFixture<LaQuemadaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LaQuemadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
