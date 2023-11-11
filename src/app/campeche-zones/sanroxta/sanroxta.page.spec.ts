import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SanroxtaPage } from './sanroxta.page';

describe('SanroxtaPage', () => {
  let component: SanroxtaPage;
  let fixture: ComponentFixture<SanroxtaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SanroxtaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
