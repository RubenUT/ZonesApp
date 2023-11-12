import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChimalhuacanPage } from './chimalhuacan.page';

describe('ChimalhuacanPage', () => {
  let component: ChimalhuacanPage;
  let fixture: ComponentFixture<ChimalhuacanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChimalhuacanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
