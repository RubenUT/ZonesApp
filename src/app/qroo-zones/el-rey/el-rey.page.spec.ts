import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElReyPage } from './el-rey.page';

describe('ElReyPage', () => {
  let component: ElReyPage;
  let fixture: ComponentFixture<ElReyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ElReyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
