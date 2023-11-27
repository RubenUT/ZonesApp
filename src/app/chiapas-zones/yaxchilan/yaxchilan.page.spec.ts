import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YaxchilanPage } from './yaxchilan.page';

describe('YaxchilanPage', () => {
  let component: YaxchilanPage;
  let fixture: ComponentFixture<YaxchilanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(YaxchilanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
