import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KankiPage } from './kanki.page';

describe('KankiPage', () => {
  let component: KankiPage;
  let fixture: ComponentFixture<KankiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(KankiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
