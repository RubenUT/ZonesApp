import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuevaGrandePage } from './cueva-grande.page';

describe('CuevaGrandePage', () => {
  let component: CuevaGrandePage;
  let fixture: ComponentFixture<CuevaGrandePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CuevaGrandePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
