import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZonaPaleontologicaRinconColoradoPage } from './zona-paleontologica-rincon-colorado.page';

describe('ZonaPaleontologicaRinconColoradoPage', () => {
  let component: ZonaPaleontologicaRinconColoradoPage;
  let fixture: ComponentFixture<ZonaPaleontologicaRinconColoradoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ZonaPaleontologicaRinconColoradoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
