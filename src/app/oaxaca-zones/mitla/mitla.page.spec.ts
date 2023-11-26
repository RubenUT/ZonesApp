import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MitlaPage } from './mitla.page';

describe('MitlaPage', () => {
  let component: MitlaPage;
  let fixture: ComponentFixture<MitlaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MitlaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
