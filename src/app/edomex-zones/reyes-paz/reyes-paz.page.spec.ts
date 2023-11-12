import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReyesPazPage } from './reyes-paz.page';

describe('ReyesPazPage', () => {
  let component: ReyesPazPage;
  let fixture: ComponentFixture<ReyesPazPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReyesPazPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
