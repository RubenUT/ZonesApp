import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChinkulticPage } from './chinkultic.page';

describe('ChinkulticPage', () => {
  let component: ChinkulticPage;
  let fixture: ComponentFixture<ChinkulticPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChinkulticPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
