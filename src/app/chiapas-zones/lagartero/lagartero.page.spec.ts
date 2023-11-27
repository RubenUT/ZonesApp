import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LagarteroPage } from './lagartero.page';

describe('LagarteroPage', () => {
  let component: LagarteroPage;
  let fixture: ComponentFixture<LagarteroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LagarteroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
