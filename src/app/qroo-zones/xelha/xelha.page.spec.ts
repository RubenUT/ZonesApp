import { ComponentFixture, TestBed } from '@angular/core/testing';
import { XelhaPage } from './xelha.page';

describe('XelhaPage', () => {
  let component: XelhaPage;
  let fixture: ComponentFixture<XelhaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(XelhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
