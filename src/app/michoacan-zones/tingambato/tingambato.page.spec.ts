import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TingambatoPage } from './tingambato.page';

describe('TingambatoPage', () => {
  let component: TingambatoPage;
  let fixture: ComponentFixture<TingambatoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TingambatoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
