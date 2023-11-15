import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CempoalaPage } from './cempoala.page';

describe('CempoalaPage', () => {
  let component: CempoalaPage;
  let fixture: ComponentFixture<CempoalaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CempoalaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
