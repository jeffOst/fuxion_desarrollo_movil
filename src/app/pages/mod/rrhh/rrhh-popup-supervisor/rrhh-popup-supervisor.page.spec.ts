import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RrhhPopupSupervisorPage } from './rrhh-popup-supervisor.page';

describe('RrhhPopupSupervisorPage', () => {
  let component: RrhhPopupSupervisorPage;
  let fixture: ComponentFixture<RrhhPopupSupervisorPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(RrhhPopupSupervisorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
