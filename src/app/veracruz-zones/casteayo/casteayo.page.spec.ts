import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CasteayoPage } from './casteayo.page';

describe('CasteayoPage', () => {
  let component: CasteayoPage;
  let fixture: ComponentFixture<CasteayoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CasteayoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
