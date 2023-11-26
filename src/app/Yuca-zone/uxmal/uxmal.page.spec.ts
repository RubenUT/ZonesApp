import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UxmalPage } from './uxmal.page';

describe('UxmalPage', () => {
  let component: UxmalPage;
  let fixture: ComponentFixture<UxmalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UxmalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
