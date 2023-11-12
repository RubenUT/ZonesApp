import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HuexotlaPage } from './huexotla.page';

describe('HuexotlaPage', () => {
  let component: HuexotlaPage;
  let fixture: ComponentFixture<HuexotlaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HuexotlaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
