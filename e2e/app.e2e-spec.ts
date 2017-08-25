import { DailyReportPage } from './app.po';

describe('daily-report App', () => {
  let page: DailyReportPage;

  beforeEach(() => {
    page = new DailyReportPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
