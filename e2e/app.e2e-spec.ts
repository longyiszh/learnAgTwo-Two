import { LearnAgTwoTwoPage } from './app.po';

describe('learn-ag-two-two App', function() {
  let page: LearnAgTwoTwoPage;

  beforeEach(() => {
    page = new LearnAgTwoTwoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
