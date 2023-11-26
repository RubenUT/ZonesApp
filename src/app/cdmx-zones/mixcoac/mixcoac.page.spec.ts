import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MixcoacPage } from './mixcoac.page';

describe('MixcoacPage', () => {
  let component: MixcoacPage;
  let fixture: ComponentFixture<MixcoacPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MixcoacPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
