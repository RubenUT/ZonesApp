import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SanGervasioPage } from './san-gervasio.page';

describe('SanGervasioPage', () => {
  let component: SanGervasioPage;
  let fixture: ComponentFixture<SanGervasioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SanGervasioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
