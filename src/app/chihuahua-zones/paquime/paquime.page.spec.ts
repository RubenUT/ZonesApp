import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaquimePage } from './paquime.page';

describe('PaquimePage', () => {
  let component: PaquimePage;
  let fixture: ComponentFixture<PaquimePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PaquimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
