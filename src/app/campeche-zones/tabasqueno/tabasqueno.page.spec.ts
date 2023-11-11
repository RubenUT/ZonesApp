import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabasquenoPage } from './tabasqueno.page';

describe('TabasquenoPage', () => {
  let component: TabasquenoPage;
  let fixture: ComponentFixture<TabasquenoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TabasquenoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
