import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IhuatzioPage } from './ihuatzio.page';

describe('IhuatzioPage', () => {
  let component: IhuatzioPage;
  let fixture: ComponentFixture<IhuatzioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IhuatzioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
