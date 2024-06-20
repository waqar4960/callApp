import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NearMePage } from './near-me.page';

describe('NearMePage', () => {
  let component: NearMePage;
  let fixture: ComponentFixture<NearMePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NearMePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
