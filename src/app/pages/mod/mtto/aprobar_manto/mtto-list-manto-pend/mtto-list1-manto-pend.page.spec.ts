import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MttoList1MantoPendPage } from './mtto-list1-manto-pend.page';

describe('MttoList1MantoPendPage', () => {
  let component: MttoList1MantoPendPage;
  let fixture: ComponentFixture<MttoList1MantoPendPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(MttoList1MantoPendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
