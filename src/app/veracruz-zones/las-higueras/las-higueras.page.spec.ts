import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LasHiguerasPage } from './las-higueras.page';

describe('LasHiguerasPage', () => {
  let component: LasHiguerasPage;
  let fixture: ComponentFixture<LasHiguerasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LasHiguerasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
