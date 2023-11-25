import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SanMigueltoPage } from './san-miguelto.page';

describe('SanMigueltoPage', () => {
  let component: SanMigueltoPage;
  let fixture: ComponentFixture<SanMigueltoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SanMigueltoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
