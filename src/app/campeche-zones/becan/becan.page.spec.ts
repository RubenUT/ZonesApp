import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BecanPage } from './becan.page';

describe('BecanPage', () => {
  let component: BecanPage;
  let fixture: ComponentFixture<BecanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BecanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
