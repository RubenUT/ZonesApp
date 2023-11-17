import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OcoyoacacPage } from './ocoyoacac.page';

describe('OcoyoacacPage', () => {
  let component: OcoyoacacPage;
  let fixture: ComponentFixture<OcoyoacacPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OcoyoacacPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
