import { render, screen, fireEvent } from "@testing-library/react";
import { MovieAddForm } from "../MovieAddForm";

test('renders MovieAddform', () => {
  render(<MovieAddForm />);
  
  const titleLabelEl = screen.getByText('Title');
  expect(titleLabelEl).toBeInTheDocument();
  
  const genreLabelEl = screen.getByText('Genre');
  expect(genreLabelEl).toBeInTheDocument();
});

test('MovieAddform onChange', async () => {
  const component = render(<MovieAddForm />);
  const MovieAddFormEl = await component.findByTestId("MovieAdd");
  
  const inputTitleEl = MovieAddFormEl.querySelector("input[name='title']");
  fireEvent.change(inputTitleEl, {
    target: {value: "Idiots"}
  });
  expect(inputTitleEl.value).toEqual('Idiots');

  const inputGenreEl = MovieAddFormEl.querySelector("input[name='genre']");
  fireEvent.change(inputGenreEl, {
    target: {value: "Comedy"}
  });
  expect(inputGenreEl.value).toEqual('Comedy');

  const inputDescEl = MovieAddFormEl.querySelector("input[name='description']");
  fireEvent.change(inputDescEl, {
    target: {value: "Some description"}
  });
  expect(inputDescEl.value).toEqual('Some description');
})