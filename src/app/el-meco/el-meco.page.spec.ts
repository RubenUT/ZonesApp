import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElMecoPage } from './el-meco.page';

describe('ElMecoPage', () => {
  let component: ElMecoPage;
  let fixture: ComponentFixture<ElMecoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ElMecoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
