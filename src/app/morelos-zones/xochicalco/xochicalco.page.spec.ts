import { ComponentFixture, TestBed } from '@angular/core/testing';
import { XochicalcoPage } from './xochicalco.page';

describe('XochicalcoPage', () => {
  let component: XochicalcoPage;
  let fixture: ComponentFixture<XochicalcoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(XochicalcoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
