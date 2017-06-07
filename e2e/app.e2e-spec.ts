import { ModelDrivenPage } from './app.po';

describe('model-driven App', () => {
  let page: ModelDrivenPage;

  beforeEach(() => {
    page = new ModelDrivenPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
