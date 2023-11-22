import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HuapalcalcoPage } from './huapalcalco.page';

describe('HuapalcalcoPage', () => {
  let component: HuapalcalcoPage;
  let fixture: ComponentFixture<HuapalcalcoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HuapalcalcoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
