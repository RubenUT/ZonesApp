import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SanlotenPage } from './sanloten.page';

describe('SanlotenPage', () => {
  let component: SanlotenPage;
  let fixture: ComponentFixture<SanlotenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SanlotenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
