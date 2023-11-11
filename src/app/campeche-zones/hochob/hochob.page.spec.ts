import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HochobPage } from './hochob.page';

describe('HochobPage', () => {
  let component: HochobPage;
  let fixture: ComponentFixture<HochobPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HochobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
