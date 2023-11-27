import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IglesiaViejaPage } from './iglesia-vieja.page';

describe('IglesiaViejaPage', () => {
  let component: IglesiaViejaPage;
  let fixture: ComponentFixture<IglesiaViejaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IglesiaViejaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
