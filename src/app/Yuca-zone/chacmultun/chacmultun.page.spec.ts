import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChacmultunPage } from './chacmultun.page';

describe('ChacmultunPage', () => {
  let component: ChacmultunPage;
  let fixture: ComponentFixture<ChacmultunPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChacmultunPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
