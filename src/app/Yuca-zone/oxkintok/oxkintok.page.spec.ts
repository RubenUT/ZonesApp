import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OxkintokPage } from './oxkintok.page';

describe('OxkintokPage', () => {
  let component: OxkintokPage;
  let fixture: ComponentFixture<OxkintokPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OxkintokPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
