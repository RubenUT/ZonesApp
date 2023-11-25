import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChankanbakanPage } from './chankanbakan.page';

describe('ChankanbakanPage', () => {
  let component: ChankanbakanPage;
  let fixture: ComponentFixture<ChankanbakanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChankanbakanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
