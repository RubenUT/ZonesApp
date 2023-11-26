import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YagulPage } from './yagul.page';

describe('YagulPage', () => {
  let component: YagulPage;
  let fixture: ComponentFixture<YagulPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(YagulPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
