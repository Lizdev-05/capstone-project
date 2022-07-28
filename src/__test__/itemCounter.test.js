/**
 * @jest-environment jsdom
 */

const fetchMock = require('fetch-mock');

describe('async fetch', () => {
  test('can fetch', async () => {
    fetchMock.get('https://www.themealdb.com/api/json/v1/1/filter.php?a=British', {
      meals: [{ idMeal: '123' },
        { idMeal: '123' },
        { idMeal: '123' },
        { idMeal: '123' },
        { idMeal: '123' },
        { idMeal: '123' },
        { idMeal: '123' },
      ],
    });
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=British');
    const data = await response.json();
    expect(data.meals.length).toBe(7);
  });
});
