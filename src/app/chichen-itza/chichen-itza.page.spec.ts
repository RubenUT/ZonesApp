import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChichenItzaPage } from './chichen-itza.page';

describe('ChichenItzaPage', () => {
  let component: ChichenItzaPage;
  let fixture: ComponentFixture<ChichenItzaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChichenItzaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
