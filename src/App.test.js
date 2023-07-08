import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import myStore from './store';

describe('<App />', ()=> {

test('renders without errors', () => {
  render(
  <Provider store={myStore}>
    <MemoryRouter> 
      <App />
    </MemoryRouter>
  </Provider>);
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});


})

