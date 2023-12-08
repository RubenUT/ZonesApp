import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TamtocPage } from './tamtoc.page';

describe('TamtocPage', () => {
  let component: TamtocPage;
  let fixture: ComponentFixture<TamtocPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TamtocPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
