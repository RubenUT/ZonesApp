import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoralReformaPage } from './moral-reforma.page';

describe('MoralReformaPage', () => {
  let component: MoralReformaPage;
  let fixture: ComponentFixture<MoralReformaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MoralReformaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
