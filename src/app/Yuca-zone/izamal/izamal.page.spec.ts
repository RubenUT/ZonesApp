import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IzamalPage } from './izamal.page';

describe('IzamalPage', () => {
  let component: IzamalPage;
  let fixture: ComponentFixture<IzamalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IzamalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
