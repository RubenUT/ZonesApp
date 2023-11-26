import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BocanaDelRioCopalitaPage } from './bocana-del-rio-copalita.page';

describe('BocanaDelRioCopalitaPage', () => {
  let component: BocanaDelRioCopalitaPage;
  let fixture: ComponentFixture<BocanaDelRioCopalitaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BocanaDelRioCopalitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
