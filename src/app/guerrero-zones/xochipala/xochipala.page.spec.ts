import { ComponentFixture, TestBed } from '@angular/core/testing';
import { XochipalaPage } from './xochipala.page';

describe('XochipalaPage', () => {
  let component: XochipalaPage;
  let fixture: ComponentFixture<XochipalaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(XochipalaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
