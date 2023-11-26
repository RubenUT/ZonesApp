import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DainzuPage } from './dainzu.page';

describe('DainzuPage', () => {
  let component: DainzuPage;
  let fixture: ComponentFixture<DainzuPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DainzuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
