import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PalenquePage } from './palenque.page';

describe('PalenquePage', () => {
  let component: PalenquePage;
  let fixture: ComponentFixture<PalenquePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PalenquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
