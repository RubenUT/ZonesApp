import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DzibilnocacPage } from './dzibilnocac.page';

describe('DzibilnocacPage', () => {
  let component: DzibilnocacPage;
  let fixture: ComponentFixture<DzibilnocacPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DzibilnocacPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
