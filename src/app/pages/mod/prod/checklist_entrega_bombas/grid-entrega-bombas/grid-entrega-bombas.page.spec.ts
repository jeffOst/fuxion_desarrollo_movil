import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { GridEntregaBombasPage } from './grid-entrega-bombas.page';

describe('GridEntregaBombasPage', () => {
  let component: GridEntregaBombasPage;
  let fixture: ComponentFixture<GridEntregaBombasPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(GridEntregaBombasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
