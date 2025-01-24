import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MttoListMantoGuiaOtPage } from './mtto-list-manto-guia-ot.page';

describe('MttoListMantoGuiaOtPage', () => {
  let component: MttoListMantoGuiaOtPage;
  let fixture: ComponentFixture<MttoListMantoGuiaOtPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(MttoListMantoGuiaOtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
