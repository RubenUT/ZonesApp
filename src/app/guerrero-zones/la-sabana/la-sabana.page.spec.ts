import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LaSabanaPage } from './la-sabana.page';

describe('LaSabanaPage', () => {
  let component: LaSabanaPage;
  let fixture: ComponentFixture<LaSabanaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LaSabanaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
