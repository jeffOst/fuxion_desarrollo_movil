import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RrhhWinHorasExtrasPage } from './rrhh-win-horas-extras.page';

describe('RrhhWinHorasExtrasPage', () => {
  let component: RrhhWinHorasExtrasPage;
  let fixture: ComponentFixture<RrhhWinHorasExtrasPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(RrhhWinHorasExtrasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
