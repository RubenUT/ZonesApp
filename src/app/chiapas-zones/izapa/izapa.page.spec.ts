import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IzapaPage } from './izapa.page';

describe('IzapaPage', () => {
  let component: IzapaPage;
  let fixture: ComponentFixture<IzapaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IzapaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
