import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElHormigueroPage } from './el-hormiguero.page';

describe('ElHormigueroPage', () => {
  let component: ElHormigueroPage;
  let fixture: ComponentFixture<ElHormigueroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ElHormigueroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
