import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IxcateopanPage } from './ixcateopan.page';

describe('IxcateopanPage', () => {
  let component: IxcateopanPage;
  let fixture: ComponentFixture<IxcateopanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IxcateopanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
