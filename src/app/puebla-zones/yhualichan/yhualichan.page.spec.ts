import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YhualichanPage } from './yhualichan.page';

describe('YhualichanPage', () => {
  let component: YhualichanPage;
  let fixture: ComponentFixture<YhualichanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(YhualichanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
