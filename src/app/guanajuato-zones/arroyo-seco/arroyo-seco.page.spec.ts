import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArroyoSecoPage } from './arroyo-seco.page';

describe('ArroyoSecoPage', () => {
  let component: ArroyoSecoPage;
  let fixture: ComponentFixture<ArroyoSecoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ArroyoSecoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
