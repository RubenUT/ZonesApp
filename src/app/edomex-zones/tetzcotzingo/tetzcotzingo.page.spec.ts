import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TetzcotzingoPage } from './tetzcotzingo.page';

describe('TetzcotzingoPage', () => {
  let component: TetzcotzingoPage;
  let fixture: ComponentFixture<TetzcotzingoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TetzcotzingoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
