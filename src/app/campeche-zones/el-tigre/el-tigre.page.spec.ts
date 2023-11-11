import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElTigrePage } from './el-tigre.page';

describe('ElTigrePage', () => {
  let component: ElTigrePage;
  let fixture: ComponentFixture<ElTigrePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ElTigrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
