import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TizatlanPage } from './tizatlan.page';

describe('TizatlanPage', () => {
  let component: TizatlanPage;
  let fixture: ComponentFixture<TizatlanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TizatlanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
