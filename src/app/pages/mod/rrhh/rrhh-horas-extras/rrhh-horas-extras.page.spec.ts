import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RrhhHorasExtrasPage } from './rrhh-horas-extras.page';

describe('RrhhHorasExtrasPage', () => {
  let component: RrhhHorasExtrasPage;
  let fixture: ComponentFixture<RrhhHorasExtrasPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(RrhhHorasExtrasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
