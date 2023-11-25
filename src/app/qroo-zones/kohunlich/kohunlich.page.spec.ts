import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KohunlichPage } from './kohunlich.page';

describe('KohunlichPage', () => {
  let component: KohunlichPage;
  let fixture: ComponentFixture<KohunlichPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(KohunlichPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
