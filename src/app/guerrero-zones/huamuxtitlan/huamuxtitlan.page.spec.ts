import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HuamuxtitlanPage } from './huamuxtitlan.page';

describe('HuamuxtitlanPage', () => {
  let component: HuamuxtitlanPage;
  let fixture: ComponentFixture<HuamuxtitlanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HuamuxtitlanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
