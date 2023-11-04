import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AkePage } from './ake.page';

describe('AkePage', () => {
  let component: AkePage;
  let fixture: ComponentFixture<AkePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AkePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
