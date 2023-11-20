import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PomonaPage } from './pomona.page';

describe('PomonaPage', () => {
  let component: PomonaPage;
  let fixture: ComponentFixture<PomonaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PomonaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
