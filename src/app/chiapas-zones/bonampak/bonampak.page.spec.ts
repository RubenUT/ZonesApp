import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BonampakPage } from './bonampak.page';

describe('BonampakPage', () => {
  let component: BonampakPage;
  let fixture: ComponentFixture<BonampakPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BonampakPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
