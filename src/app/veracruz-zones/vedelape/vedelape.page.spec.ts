import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VedelapePage } from './vedelape.page';

describe('VedelapePage', () => {
  let component: VedelapePage;
  let fixture: ComponentFixture<VedelapePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VedelapePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
