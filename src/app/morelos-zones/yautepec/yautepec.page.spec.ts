import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YautepecPage } from './yautepec.page';

describe('YautepecPage', () => {
  let component: YautepecPage;
  let fixture: ComponentFixture<YautepecPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(YautepecPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
