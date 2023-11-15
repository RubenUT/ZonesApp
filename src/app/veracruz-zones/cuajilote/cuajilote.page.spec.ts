import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuajilotePage } from './cuajilote.page';

describe('CuajilotePage', () => {
  let component: CuajilotePage;
  let fixture: ComponentFixture<CuajilotePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CuajilotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
