import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaracolPage } from './caracol.page';

describe('CaracolPage', () => {
  let component: CaracolPage;
  let fixture: ComponentFixture<CaracolPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CaracolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
