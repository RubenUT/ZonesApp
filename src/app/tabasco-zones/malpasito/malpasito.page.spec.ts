import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MalpasitoPage } from './malpasito.page';

describe('MalpasitoPage', () => {
  let component: MalpasitoPage;
  let fixture: ComponentFixture<MalpasitoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MalpasitoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
