import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LaCampanaPage } from './la-campana.page';

describe('LaCampanaPage', () => {
  let component: LaCampanaPage;
  let fixture: ComponentFixture<LaCampanaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LaCampanaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
