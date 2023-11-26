import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcancehPage } from './acanceh.page';

describe('AcancehPage', () => {
  let component: AcancehPage;
  let fixture: ComponentFixture<AcancehPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AcancehPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
