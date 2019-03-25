import { EqrsUiHarpPage } from './app.po';

describe('eqrs-ui-harp App', () => {
  let page: EqrsUiHarpPage;

  beforeEach(() => {
    page = new EqrsUiHarpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
