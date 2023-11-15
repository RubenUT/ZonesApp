import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuianhuiztlanPage } from './quianhuiztlan.page';

describe('QuianhuiztlanPage', () => {
  let component: QuianhuiztlanPage;
  let fixture: ComponentFixture<QuianhuiztlanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QuianhuiztlanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
