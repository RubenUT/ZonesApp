import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PahnuPage } from './pahnu.page';

describe('PahnuPage', () => {
  let component: PahnuPage;
  let fixture: ComponentFixture<PahnuPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PahnuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
