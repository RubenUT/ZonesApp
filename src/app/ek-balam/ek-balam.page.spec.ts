import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EkBalamPage } from './ek-balam.page';

describe('EkBalamPage', () => {
  let component: EkBalamPage;
  let fixture: ComponentFixture<EkBalamPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EkBalamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
