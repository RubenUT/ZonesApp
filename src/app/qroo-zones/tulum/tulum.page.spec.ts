import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TulumPage } from './tulum.page';

describe('TulumPage', () => {
  let component: TulumPage;
  let fixture: ComponentFixture<TulumPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TulumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
