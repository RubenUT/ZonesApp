import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChicannaPage } from './chicanna.page';

describe('ChicannaPage', () => {
  let component: ChicannaPage;
  let fixture: ComponentFixture<ChicannaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChicannaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
