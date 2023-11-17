import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TlapacoyaPage } from './tlapacoya.page';

describe('TlapacoyaPage', () => {
  let component: TlapacoyaPage;
  let fixture: ComponentFixture<TlapacoyaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TlapacoyaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
