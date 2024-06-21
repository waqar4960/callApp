import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConversationPagePage } from './conversation-page.page';

describe('ConversationPagePage', () => {
  let component: ConversationPagePage;
  let fixture: ComponentFixture<ConversationPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversationPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
