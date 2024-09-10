import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { WinEntregaBombas1Page } from './win-entrega-bombas1.page';

describe('WinEntregaBombas1Page', () => {
  let component: WinEntregaBombas1Page;
  let fixture: ComponentFixture<WinEntregaBombas1Page>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(WinEntregaBombas1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
