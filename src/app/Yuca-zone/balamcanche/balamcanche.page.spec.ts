import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BalamcanchePage } from './balamcanche.page';

describe('BalamcanchePage', () => {
  let component: BalamcanchePage;
  let fixture: ComponentFixture<BalamcanchePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BalamcanchePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
