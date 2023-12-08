import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AltaVistaChalchihuitesPage } from './alta-vista-chalchihuites.page';

describe('AltaVistaChalchihuitesPage', () => {
  let component: AltaVistaChalchihuitesPage;
  let fixture: ComponentFixture<AltaVistaChalchihuitesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AltaVistaChalchihuitesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
