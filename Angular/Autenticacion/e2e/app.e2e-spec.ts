import { AutenticacionPage } from './app.po';

describe('autenticacion App', () => {
  let page: AutenticacionPage;

  beforeEach(() => {
    page = new AutenticacionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
