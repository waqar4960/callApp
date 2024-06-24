import { TestBed } from '@angular/core/testing';

import { VoiceMessageService } from './voice-message.service';

describe('VoiceMessageService', () => {
  let service: VoiceMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoiceMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
