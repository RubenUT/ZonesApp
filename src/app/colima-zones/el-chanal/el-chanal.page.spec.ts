import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElChanalPage } from './el-chanal.page';

describe('ElChanalPage', () => {
  let component: ElChanalPage;
  let fixture: ComponentFixture<ElChanalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ElChanalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
