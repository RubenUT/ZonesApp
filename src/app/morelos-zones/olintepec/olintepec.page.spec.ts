import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OlintepecPage } from './olintepec.page';

describe('OlintepecPage', () => {
  let component: OlintepecPage;
  let fixture: ComponentFixture<OlintepecPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OlintepecPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
