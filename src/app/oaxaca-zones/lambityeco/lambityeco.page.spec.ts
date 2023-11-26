import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LambityecoPage } from './lambityeco.page';

describe('LambityecoPage', () => {
  let component: LambityecoPage;
  let fixture: ComponentFixture<LambityecoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LambityecoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
