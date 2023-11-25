import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OxtankahPage } from './oxtankah.page';

describe('OxtankahPage', () => {
  let component: OxtankahPage;
  let fixture: ComponentFixture<OxtankahPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OxtankahPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
