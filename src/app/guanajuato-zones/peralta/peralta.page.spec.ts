import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PeraltaPage } from './peralta.page';

describe('PeraltaPage', () => {
  let component: PeraltaPage;
  let fixture: ComponentFixture<PeraltaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PeraltaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
