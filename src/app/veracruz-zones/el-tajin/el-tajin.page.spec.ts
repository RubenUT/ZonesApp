import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElTajinPage } from './el-tajin.page';

describe('ElTajinPage', () => {
  let component: ElTajinPage;
  let fixture: ComponentFixture<ElTajinPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ElTajinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
