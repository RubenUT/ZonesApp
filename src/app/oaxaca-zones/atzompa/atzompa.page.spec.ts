import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AtzompaPage } from './atzompa.page';

describe('AtzompaPage', () => {
  let component: AtzompaPage;
  let fixture: ComponentFixture<AtzompaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AtzompaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
