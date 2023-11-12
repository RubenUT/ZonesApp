import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HuamangoPage } from './huamango.page';

describe('HuamangoPage', () => {
  let component: HuamangoPage;
  let fixture: ComponentFixture<HuamangoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HuamangoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
