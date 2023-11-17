import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TresZapotesPage } from './tres-zapotes.page';

describe('TresZapotesPage', () => {
  let component: TresZapotesPage;
  let fixture: ComponentFixture<TresZapotesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TresZapotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
