import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TenayucaLLlPage } from './tenayuca-l-ll.page';

describe('TenayucaLLlPage', () => {
  let component: TenayucaLLlPage;
  let fixture: ComponentFixture<TenayucaLLlPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TenayucaLLlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
