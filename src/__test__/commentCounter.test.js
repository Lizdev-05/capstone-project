/**
 * @jest-environment jsdom
 */

const fetchMock = require('fetch-mock');

describe('async function', () => {
  it('should resolve after a time', async () => {
    fetchMock.mock(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/n9t5YbrpQrNNAecac7tn/comments',
      {
        comment: [
          { idMeal: 1, comment: 'This is a comment' },
          { idMeal: 2, comment: 'This is a comment' },
          { idMeal: 3, comment: 'This is a comment' },
          { idMeal: 4, comment: 'This is a comment' },
        ],
      },
    );
    const response = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/n9t5YbrpQrNNAecac7tn/comments',
    );
    const data = await response.json();
    expect(data.comment.length).toBe(4);
  });
});