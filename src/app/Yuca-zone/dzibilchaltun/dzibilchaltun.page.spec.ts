import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DzibilchaltunPage } from './dzibilchaltun.page';

describe('DzibilchaltunPage', () => {
  let component: DzibilchaltunPage;
  let fixture: ComponentFixture<DzibilchaltunPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DzibilchaltunPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
