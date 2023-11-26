import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HuamelupanPage } from './huamelupan.page';

describe('HuamelupanPage', () => {
  let component: HuamelupanPage;
  let fixture: ComponentFixture<HuamelupanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HuamelupanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
