import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MuyilPage } from './muyil.page';

describe('MuyilPage', () => {
  let component: MuyilPage;
  let fixture: ComponentFixture<MuyilPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MuyilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
