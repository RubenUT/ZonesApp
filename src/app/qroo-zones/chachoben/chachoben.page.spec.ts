import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChachobenPage } from './chachoben.page';

describe('ChachobenPage', () => {
  let component: ChachobenPage;
  let fixture: ComponentFixture<ChachobenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChachobenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
