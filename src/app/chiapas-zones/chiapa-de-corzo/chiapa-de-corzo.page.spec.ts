import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChiapaDeCorzoPage } from './chiapa-de-corzo.page';

describe('ChiapaDeCorzoPage', () => {
  let component: ChiapaDeCorzoPage;
  let fixture: ComponentFixture<ChiapaDeCorzoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChiapaDeCorzoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
