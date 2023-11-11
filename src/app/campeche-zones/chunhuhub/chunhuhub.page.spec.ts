import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChunhuhubPage } from './chunhuhub.page';

describe('ChunhuhubPage', () => {
  let component: ChunhuhubPage;
  let fixture: ComponentFixture<ChunhuhubPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChunhuhubPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
