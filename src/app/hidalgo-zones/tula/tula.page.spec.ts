import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TulaPage } from './tula.page';

describe('TulaPage', () => {
  let component: TulaPage;
  let fixture: ComponentFixture<TulaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TulaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
