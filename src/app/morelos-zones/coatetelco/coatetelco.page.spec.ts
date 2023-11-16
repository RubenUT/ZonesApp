import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoatetelcoPage } from './coatetelco.page';

describe('CoatetelcoPage', () => {
  let component: CoatetelcoPage;
  let fixture: ComponentFixture<CoatetelcoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CoatetelcoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
