import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SierraDeSanFranciscoPage } from './sierra-de-san-francisco.page';

describe('SierraDeSanFranciscoPage', () => {
  let component: SierraDeSanFranciscoPage;
  let fixture: ComponentFixture<SierraDeSanFranciscoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SierraDeSanFranciscoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
