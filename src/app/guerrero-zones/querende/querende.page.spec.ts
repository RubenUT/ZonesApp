import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuerendePage } from './querende.page';

describe('QuerendePage', () => {
  let component: QuerendePage;
  let fixture: ComponentFixture<QuerendePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QuerendePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
