import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TenamPuentePage } from './tenam-puente.page';

describe('TenamPuentePage', () => {
  let component: TenamPuentePage;
  let fixture: ComponentFixture<TenamPuentePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TenamPuentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
