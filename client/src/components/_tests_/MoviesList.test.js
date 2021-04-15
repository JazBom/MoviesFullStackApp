import { render, screen, waitFor } from '@testing-library/react';
import { MoviesList } from '../MoviesList';

const moviesSampleData = [
    {id: '1', name: 'Idiots', genre: 'Comedy'},
    {id: '2', name: 'Harry Potter', genre: 'Fantasy'},
]

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(moviesSampleData)
  })
});

afterEach(() => {
  jest.restoreAllMocks();
});

// global.fetch = jest.fn(() => {
//   return Promise.resolve({
//       json: () => {
//           return Promise.resolve([
//               {id: '1', name: 'Idiots', genre: 'Comedy'},
//               {id: '2', name: 'Harry Potter', genre: 'Fantasy'}
//           ])
//       }
//   })
// })

test('renders MoviesList correctly', async () => {
  render(<MoviesList />)

  await waitFor(async () => {
    const titleElement = screen.getByText('Idiots');
    expect(titleElement).toBeInTheDocument();

    const genreElement = screen.getByText('Comedy');
    expect(genreElement).toBeInTheDocument();
  })

})

