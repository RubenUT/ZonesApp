import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LasFloresPage } from './las-flores.page';

describe('LasFloresPage', () => {
  let component: LasFloresPage;
  let fixture: ComponentFixture<LasFloresPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LasFloresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
