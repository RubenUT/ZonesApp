import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuicuilcoPage } from './cuicuilco.page';

describe('CuicuilcoPage', () => {
  let component: CuicuilcoPage;
  let fixture: ComponentFixture<CuicuilcoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CuicuilcoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
