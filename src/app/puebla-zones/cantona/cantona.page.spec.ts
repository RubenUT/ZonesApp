import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CantonaPage } from './cantona.page';

describe('CantonaPage', () => {
  let component: CantonaPage;
  let fixture: ComponentFixture<CantonaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CantonaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
