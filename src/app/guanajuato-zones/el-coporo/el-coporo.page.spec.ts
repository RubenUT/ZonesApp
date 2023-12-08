import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElCoporoPage } from './el-coporo.page';

describe('ElCoporoPage', () => {
  let component: ElCoporoPage;
  let fixture: ComponentFixture<ElCoporoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ElCoporoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
