import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlazuelasPage } from './plazuelas.page';

describe('PlazuelasPage', () => {
  let component: PlazuelasPage;
  let fixture: ComponentFixture<PlazuelasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PlazuelasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
