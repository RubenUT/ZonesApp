import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CanadaDeLaVirgenPage } from './canada-de-la-virgen.page';

describe('CanadaDeLaVirgenPage', () => {
  let component: CanadaDeLaVirgenPage;
  let fixture: ComponentFixture<CanadaDeLaVirgenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CanadaDeLaVirgenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
