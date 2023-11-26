import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonteAlbanPage } from './monte-alban.page';

describe('MonteAlbanPage', () => {
  let component: MonteAlbanPage;
  let fixture: ComponentFixture<MonteAlbanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MonteAlbanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
