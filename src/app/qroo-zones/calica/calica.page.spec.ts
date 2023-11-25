import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalicaPage } from './calica.page';

describe('CalicaPage', () => {
  let component: CalicaPage;
  let fixture: ComponentFixture<CalicaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CalicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
