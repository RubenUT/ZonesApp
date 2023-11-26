import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TlatelolcoPage } from './tlatelolco.page';

describe('TlatelolcoPage', () => {
  let component: TlatelolcoPage;
  let fixture: ComponentFixture<TlatelolcoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TlatelolcoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
