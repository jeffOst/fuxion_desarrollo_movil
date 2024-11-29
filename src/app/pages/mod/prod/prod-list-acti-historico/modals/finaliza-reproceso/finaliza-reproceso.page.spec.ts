import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FinalizaReprocesoPage } from './finaliza-reproceso.page';

describe('FinalizaReprocesoPage', () => {
  let component: FinalizaReprocesoPage;
  let fixture: ComponentFixture<FinalizaReprocesoPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(FinalizaReprocesoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
