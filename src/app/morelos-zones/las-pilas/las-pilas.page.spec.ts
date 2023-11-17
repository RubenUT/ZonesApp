import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LasPilasPage } from './las-pilas.page';

describe('LasPilasPage', () => {
  let component: LasPilasPage;
  let fixture: ComponentFixture<LasPilasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LasPilasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
