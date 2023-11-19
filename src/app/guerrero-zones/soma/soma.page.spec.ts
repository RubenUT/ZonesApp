import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SomaPage } from './soma.page';

describe('SomaPage', () => {
  let component: SomaPage;
  let fixture: ComponentFixture<SomaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SomaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
