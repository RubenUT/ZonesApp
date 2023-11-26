import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CholulaPage } from './cholula.page';

describe('CholulaPage', () => {
  let component: CholulaPage;
  let fixture: ComponentFixture<CholulaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CholulaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
