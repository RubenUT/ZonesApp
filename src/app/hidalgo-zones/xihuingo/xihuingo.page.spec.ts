import { ComponentFixture, TestBed } from '@angular/core/testing';
import { XihuingoPage } from './xihuingo.page';

describe('XihuingoPage', () => {
  let component: XihuingoPage;
  let fixture: ComponentFixture<XihuingoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(XihuingoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
