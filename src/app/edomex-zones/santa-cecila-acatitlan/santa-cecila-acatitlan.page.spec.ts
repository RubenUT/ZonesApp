import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SantaCecilaAcatitlanPage } from './santa-cecila-acatitlan.page';

describe('SantaCecilaAcatitlanPage', () => {
  let component: SantaCecilaAcatitlanPage;
  let fixture: ComponentFixture<SantaCecilaAcatitlanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SantaCecilaAcatitlanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
