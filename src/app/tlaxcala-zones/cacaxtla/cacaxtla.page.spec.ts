import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CacaxtlaPage } from './cacaxtla.page';

describe('CacaxtlaPage', () => {
  let component: CacaxtlaPage;
  let fixture: ComponentFixture<CacaxtlaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CacaxtlaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
