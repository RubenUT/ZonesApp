import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChalcatzingoPage } from './chalcatzingo.page';

describe('ChalcatzingoPage', () => {
  let component: ChalcatzingoPage;
  let fixture: ComponentFixture<ChalcatzingoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChalcatzingoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
