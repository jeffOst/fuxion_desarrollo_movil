import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PopUpBombaPage } from './pop-up-bomba.page';

describe('PopUpBombaPage', () => {
  let component: PopUpBombaPage;
  let fixture: ComponentFixture<PopUpBombaPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(PopUpBombaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
