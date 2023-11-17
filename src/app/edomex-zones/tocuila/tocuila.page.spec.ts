import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TocuilaPage } from './tocuila.page';

describe('TocuilaPage', () => {
  let component: TocuilaPage;
  let fixture: ComponentFixture<TocuilaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TocuilaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
