import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TepexiElViejoPage } from './tepexi-el-viejo.page';

describe('TepexiElViejoPage', () => {
  let component: TepexiElViejoPage;
  let fixture: ComponentFixture<TepexiElViejoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TepexiElViejoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
