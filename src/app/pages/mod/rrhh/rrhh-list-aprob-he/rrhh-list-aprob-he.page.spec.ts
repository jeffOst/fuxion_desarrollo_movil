import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RrhhListAprobHePage } from './rrhh-list-aprob-he.page';

describe('RrhhListAprobHePage', () => {
  let component: RrhhListAprobHePage;
  let fixture: ComponentFixture<RrhhListAprobHePage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(RrhhListAprobHePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
