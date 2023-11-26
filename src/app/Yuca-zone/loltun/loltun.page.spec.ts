import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoltunPage } from './loltun.page';

describe('LoltunPage', () => {
  let component: LoltunPage;
  let fixture: ComponentFixture<LoltunPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoltunPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
