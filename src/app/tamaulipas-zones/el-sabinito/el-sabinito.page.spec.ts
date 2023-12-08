import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElSabinitoPage } from './el-sabinito.page';

describe('ElSabinitoPage', () => {
  let component: ElSabinitoPage;
  let fixture: ComponentFixture<ElSabinitoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ElSabinitoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
