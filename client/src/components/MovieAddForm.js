import { useState } from 'react';

export const MovieAddForm = () => {
  const [formState, setFormState] = useState({
    title: '',
    genre: '',
    description: ''
  })
  const handleChange = (e) => {
    const newState = { ...formState };
    // eg. newState["title"]
    newState[e.target.name] = e.target.value;
    setFormState(newState);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return <>
    <form onSubmit={handleSubmit} data-testid="MovieAdd">
      <label>
        Title
       <input value={formState.title} name="title" onChange={handleChange} />
      </label>
      <label>
        Genre
       <input value={formState.genre} name="genre" onChange={handleChange} />
      </label>
      <label>
        Description
       <input value={formState.description} name="description" onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  </>
}