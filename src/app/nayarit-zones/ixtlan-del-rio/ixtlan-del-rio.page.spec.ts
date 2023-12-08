import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IxtlanDelRioPage } from './ixtlan-del-rio.page';

describe('IxtlanDelRioPage', () => {
  let component: IxtlanDelRioPage;
  let fixture: ComponentFixture<IxtlanDelRioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IxtlanDelRioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
