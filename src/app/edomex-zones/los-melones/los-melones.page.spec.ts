import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LosMelonesPage } from './los-melones.page';

describe('LosMelonesPage', () => {
  let component: LosMelonesPage;
  let fixture: ComponentFixture<LosMelonesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LosMelonesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
