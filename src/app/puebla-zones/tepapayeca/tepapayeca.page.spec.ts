import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TepapayecaPage } from './tepapayeca.page';

describe('TepapayecaPage', () => {
  let component: TepapayecaPage;
  let fixture: ComponentFixture<TepapayecaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TepapayecaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
