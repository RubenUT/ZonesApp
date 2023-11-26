import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LabnaPage } from './labna.page';

describe('LabnaPage', () => {
  let component: LabnaPage;
  let fixture: ComponentFixture<LabnaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LabnaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
