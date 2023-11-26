import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KabahPage } from './kabah.page';

describe('KabahPage', () => {
  let component: KabahPage;
  let fixture: ComponentFixture<KabahPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(KabahPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
