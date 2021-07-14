import { Test, TestingModule } from '@nestjs/testing';
import { PingCronService } from './ping-cron.service';

describe('PingCronService', () => {
  let service: PingCronService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PingCronService],
    }).compile();

    service = module.get<PingCronService>(PingCronService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
