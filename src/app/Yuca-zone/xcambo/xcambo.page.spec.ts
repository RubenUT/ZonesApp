import { ComponentFixture, TestBed } from '@angular/core/testing';
import { XcamboPage } from './xcambo.page';

describe('XcamboPage', () => {
  let component: XcamboPage;
  let fixture: ComponentFixture<XcamboPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(XcamboPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
