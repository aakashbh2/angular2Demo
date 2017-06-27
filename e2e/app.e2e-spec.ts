import { DeomProjectPage } from './app.po';

describe('deom-project App', () => {
  let page: DeomProjectPage;

  beforeEach(() => {
    page = new DeomProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
