import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SingleCallPage } from './single-call.page';

describe('SingleCallPage', () => {
  let component: SingleCallPage;
  let fixture: ComponentFixture<SingleCallPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
