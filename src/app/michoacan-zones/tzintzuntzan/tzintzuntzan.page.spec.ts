import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TzintzuntzanPage } from './tzintzuntzan.page';

describe('TzintzuntzanPage', () => {
  let component: TzintzuntzanPage;
  let fixture: ComponentFixture<TzintzuntzanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TzintzuntzanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
