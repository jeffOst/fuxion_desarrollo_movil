import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PopUpOtProtocolosPage } from './pop-up-ot-protocolos.page';

describe('PopUpOtProtocolosPage', () => {
  let component: PopUpOtProtocolosPage;
  let fixture: ComponentFixture<PopUpOtProtocolosPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(PopUpOtProtocolosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
