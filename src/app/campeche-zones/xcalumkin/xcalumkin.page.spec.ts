import { ComponentFixture, TestBed } from '@angular/core/testing';
import { XcalumkinPage } from './xcalumkin.page';

describe('XcalumkinPage', () => {
  let component: XcalumkinPage;
  let fixture: ComponentFixture<XcalumkinPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(XcalumkinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
