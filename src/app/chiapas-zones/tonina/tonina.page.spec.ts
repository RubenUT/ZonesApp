import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToninaPage } from './tonina.page';

describe('ToninaPage', () => {
  let component: ToninaPage;
  let fixture: ComponentFixture<ToninaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ToninaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
