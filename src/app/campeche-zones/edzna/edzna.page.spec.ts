import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EdznaPage } from './edzna.page';

describe('EdznaPage', () => {
  let component: EdznaPage;
  let fixture: ComponentFixture<EdznaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EdznaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
