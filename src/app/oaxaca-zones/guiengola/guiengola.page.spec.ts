import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuiengolaPage } from './guiengola.page';

describe('GuiengolaPage', () => {
  let component: GuiengolaPage;
  let fixture: ComponentFixture<GuiengolaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GuiengolaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
