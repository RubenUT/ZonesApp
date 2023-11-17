import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeotenangoPage } from './teotenango.page';

describe('TeotenangoPage', () => {
  let component: TeotenangoPage;
  let fixture: ComponentFixture<TeotenangoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TeotenangoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
