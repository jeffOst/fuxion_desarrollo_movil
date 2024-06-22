import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MotivoPausaPage } from './motivo-pausa.page';

describe('MotivoPausaPage', () => {
  let component: MotivoPausaPage;
  let fixture: ComponentFixture<MotivoPausaPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(MotivoPausaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
