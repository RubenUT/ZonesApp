import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IxtepetePage } from './ixtepete.page';

describe('IxtepetePage', () => {
  let component: IxtepetePage;
  let fixture: ComponentFixture<IxtepetePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IxtepetePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
