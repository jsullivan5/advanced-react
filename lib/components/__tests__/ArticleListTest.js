import React from 'react';
import ArticleList from '../ArticleList';

import renderer from 'react-test-renderer';

describe('article list component', () => {
  const testProps = {
    articles: {
      a: { id: 'a' },
      b: { id: 'b' },
    },
    store: {
      lookupAuthor: jest.fn(() => ({}))
    }
  };
  it('renders correctly', () => {
    const tree = renderer.create(
      <ArticleList
        {...testProps}
      />
    ).toJSON();

    // expect(tree).toMatchSnapShot();
    expect(tree.children.length).toBe(2);
  });
});
