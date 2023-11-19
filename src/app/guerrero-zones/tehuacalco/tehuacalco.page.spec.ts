import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TehuacalcoPage } from './tehuacalco.page';

describe('TehuacalcoPage', () => {
  let component: TehuacalcoPage;
  let fixture: ComponentFixture<TehuacalcoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TehuacalcoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
