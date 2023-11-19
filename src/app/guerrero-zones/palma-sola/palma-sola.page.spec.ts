import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PalmaSolaPage } from './palma-sola.page';

describe('PalmaSolaPage', () => {
  let component: PalmaSolaPage;
  let fixture: ComponentFixture<PalmaSolaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PalmaSolaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
