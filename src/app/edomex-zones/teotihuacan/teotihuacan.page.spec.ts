import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeotihuacanPage } from './teotihuacan.page';

describe('TeotihuacanPage', () => {
  let component: TeotihuacanPage;
  let fixture: ComponentFixture<TeotihuacanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TeotihuacanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
