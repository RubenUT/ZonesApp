import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElVallecitoPage } from './el-vallecito.page';

describe('ElVallecitoPage', () => {
  let component: ElVallecitoPage;
  let fixture: ComponentFixture<ElVallecitoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ElVallecitoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
