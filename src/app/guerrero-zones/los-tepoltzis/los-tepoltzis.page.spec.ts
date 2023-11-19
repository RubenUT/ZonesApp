import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LosTepoltzisPage } from './los-tepoltzis.page';

describe('LosTepoltzisPage', () => {
  let component: LosTepoltzisPage;
  let fixture: ComponentFixture<LosTepoltzisPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LosTepoltzisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
