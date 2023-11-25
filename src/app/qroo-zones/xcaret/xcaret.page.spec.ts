import { ComponentFixture, TestBed } from '@angular/core/testing';
import { XcaretPage } from './xcaret.page';

describe('XcaretPage', () => {
  let component: XcaretPage;
  let fixture: ComponentFixture<XcaretPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(XcaretPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
