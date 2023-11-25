import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayaDelCarmenPage } from './playa-del-carmen.page';

describe('PlayaDelCarmenPage', () => {
  let component: PlayaDelCarmenPage;
  let fixture: ComponentFixture<PlayaDelCarmenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PlayaDelCarmenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
