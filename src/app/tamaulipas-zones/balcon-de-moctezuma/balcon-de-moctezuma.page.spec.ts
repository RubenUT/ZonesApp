import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BalconDeMoctezumaPage } from './balcon-de-moctezuma.page';

describe('BalconDeMoctezumaPage', () => {
  let component: BalconDeMoctezumaPage;
  let fixture: ComponentFixture<BalconDeMoctezumaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BalconDeMoctezumaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
