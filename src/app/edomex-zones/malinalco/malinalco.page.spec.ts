import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MalinalcoPage } from './malinalco.page';

describe('MalinalcoPage', () => {
  let component: MalinalcoPage;
  let fixture: ComponentFixture<MalinalcoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MalinalcoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
