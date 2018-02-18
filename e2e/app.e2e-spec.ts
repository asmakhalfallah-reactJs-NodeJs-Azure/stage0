import { Stage0Page } from './app.po';

describe('stage0 App', function() {
  let page: Stage0Page;

  beforeEach(() => {
    page = new Stage0Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
