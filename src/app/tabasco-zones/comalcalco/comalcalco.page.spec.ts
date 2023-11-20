import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComalcalcoPage } from './comalcalco.page';

describe('ComalcalcoPage', () => {
  let component: ComalcalcoPage;
  let fixture: ComponentFixture<ComalcalcoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ComalcalcoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
