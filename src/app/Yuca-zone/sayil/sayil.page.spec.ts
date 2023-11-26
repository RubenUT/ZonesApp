import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SayilPage } from './sayil.page';

describe('SayilPage', () => {
  let component: SayilPage;
  let fixture: ComponentFixture<SayilPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SayilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
