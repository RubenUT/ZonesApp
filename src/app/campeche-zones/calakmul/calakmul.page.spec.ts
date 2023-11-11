import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalakmulPage } from './calakmul.page';

describe('CalakmulPage', () => {
  let component: CalakmulPage;
  let fixture: ComponentFixture<CalakmulPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CalakmulPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
