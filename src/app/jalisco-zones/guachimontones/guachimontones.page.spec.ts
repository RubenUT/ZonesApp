import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuachimontonesPage } from './guachimontones.page';

describe('GuachimontonesPage', () => {
  let component: GuachimontonesPage;
  let fixture: ComponentFixture<GuachimontonesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GuachimontonesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
