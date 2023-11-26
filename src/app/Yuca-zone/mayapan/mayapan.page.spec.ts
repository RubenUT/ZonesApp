import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MayapanPage } from './mayapan.page';

describe('MayapanPage', () => {
  let component: MayapanPage;
  let fixture: ComponentFixture<MayapanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MayapanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
