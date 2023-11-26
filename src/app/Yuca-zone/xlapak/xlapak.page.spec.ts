import { ComponentFixture, TestBed } from '@angular/core/testing';
import { XlapakPage } from './xlapak.page';

describe('XlapakPage', () => {
  let component: XlapakPage;
  let fixture: ComponentFixture<XlapakPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(XlapakPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
