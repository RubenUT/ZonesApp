import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IxtapalucaPage } from './ixtapaluca.page';

describe('IxtapalucaPage', () => {
  let component: IxtapalucaPage;
  let fixture: ComponentFixture<IxtapalucaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IxtapalucaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
