import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KinichnaPage } from './kinichna.page';

describe('KinichnaPage', () => {
  let component: KinichnaPage;
  let fixture: ComponentFixture<KinichnaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(KinichnaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
