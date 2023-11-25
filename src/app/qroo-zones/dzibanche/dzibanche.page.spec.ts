import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DzibanchePage } from './dzibanche.page';

describe('DzibanchePage', () => {
  let component: DzibanchePage;
  let fixture: ComponentFixture<DzibanchePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DzibanchePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
