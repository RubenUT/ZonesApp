import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElCondePage } from './el-conde.page';

describe('ElCondePage', () => {
  let component: ElCondePage;
  let fixture: ComponentFixture<ElCondePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ElCondePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
