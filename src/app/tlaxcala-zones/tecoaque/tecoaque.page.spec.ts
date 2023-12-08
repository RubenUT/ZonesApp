import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TecoaquePage } from './tecoaque.page';

describe('TecoaquePage', () => {
  let component: TecoaquePage;
  let fixture: ComponentFixture<TecoaquePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TecoaquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
