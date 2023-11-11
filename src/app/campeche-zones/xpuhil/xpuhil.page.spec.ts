import { ComponentFixture, TestBed } from '@angular/core/testing';
import { XpuhilPage } from './xpuhil.page';

describe('XpuhilPage', () => {
  let component: XpuhilPage;
  let fixture: ComponentFixture<XpuhilPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(XpuhilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
