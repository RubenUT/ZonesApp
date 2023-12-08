import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SanFelipeLosAlzatiPage } from './san-felipe-los-alzati.page';

describe('SanFelipeLosAlzatiPage', () => {
  let component: SanFelipeLosAlzatiPage;
  let fixture: ComponentFixture<SanFelipeLosAlzatiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SanFelipeLosAlzatiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
