import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ProdListActiHistoricoPage } from './prod-list-acti-historico.page';

describe('ProdListActiHistoricoPage', () => {
  let component: ProdListActiHistoricoPage;
  let fixture: ComponentFixture<ProdListActiHistoricoPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(ProdListActiHistoricoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
