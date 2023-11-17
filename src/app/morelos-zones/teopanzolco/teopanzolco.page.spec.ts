import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeopanzolcoPage } from './teopanzolco.page';

describe('TeopanzolcoPage', () => {
  let component: TeopanzolcoPage;
  let fixture: ComponentFixture<TeopanzolcoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TeopanzolcoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
