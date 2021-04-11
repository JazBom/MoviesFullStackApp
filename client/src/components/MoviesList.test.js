import { render, screen } from '@testing-library/react';
import { MoviesList } from './MoviesList';

const moviesSampleData = [
    {id: '1', name: 'Idiots', genre: 'Comedy'},
    {id: '2', name: 'Harry Potter', genre: 'Fantasy'},
]

test('renders MoviesList correctly', () => {
  render(<MoviesList movies={moviesSampleData} />)
  
  const idiotsElement = screen.getByText('Idiots');
  expect(idiotsElement).toBeInTheDocument();

  const genreElement = screen.getByText('Comedy');
  expect(genreElement).toBeInTheDocument();

})

