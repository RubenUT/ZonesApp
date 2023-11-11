import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TohcokPage } from './tohcok.page';

describe('TohcokPage', () => {
  let component: TohcokPage;
  let fixture: ComponentFixture<TohcokPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TohcokPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
