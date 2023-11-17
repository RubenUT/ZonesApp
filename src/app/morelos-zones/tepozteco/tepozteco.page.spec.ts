import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TepoztecoPage } from './tepozteco.page';

describe('TepoztecoPage', () => {
  let component: TepoztecoPage;
  let fixture: ComponentFixture<TepoztecoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TepoztecoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
