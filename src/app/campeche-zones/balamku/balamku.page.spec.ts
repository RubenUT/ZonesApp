import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BalamkuPage } from './balamku.page';

describe('BalamkuPage', () => {
  let component: BalamkuPage;
  let fixture: ComponentFixture<BalamkuPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BalamkuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
