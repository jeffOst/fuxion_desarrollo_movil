import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MttoWinMantoPendPage } from './mtto-win-manto-pend.page';

describe('MttoWinMantoPendPage', () => {
  let component: MttoWinMantoPendPage;
  let fixture: ComponentFixture<MttoWinMantoPendPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(MttoWinMantoPendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
