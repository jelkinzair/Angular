import { SPAAPage } from './app.po';

describe('spaa App', () => {
  let page: SPAAPage;

  beforeEach(() => {
    page = new SPAAPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
