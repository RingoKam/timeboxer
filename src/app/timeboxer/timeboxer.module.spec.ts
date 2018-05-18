import { TimeboxerModule } from './timeboxer.module';

describe('TimeboxerModule', () => {
  let timeboxerModule: TimeboxerModule;

  beforeEach(() => {
    timeboxerModule = new TimeboxerModule();
  });

  it('should create an instance', () => {
    expect(timeboxerModule).toBeTruthy();
  });
});
