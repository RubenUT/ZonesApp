import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SanMiguelIxtapanPage } from './san-miguel-ixtapan.page';

describe('SanMiguelIxtapanPage', () => {
  let component: SanMiguelIxtapanPage;
  let fixture: ComponentFixture<SanMiguelIxtapanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SanMiguelIxtapanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
