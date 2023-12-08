import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TamohiPage } from './tamohi.page';

describe('TamohiPage', () => {
  let component: TamohiPage;
  let fixture: ComponentFixture<TamohiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TamohiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
