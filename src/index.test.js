import React from 'react';
import { render, screen} from '@testing-library/react';
import { MemoryRouter, Route, Routes, useRouteError} from 'react-router-dom';
import App from './App';
import Users from './components/Users';
import { Provider } from 'react-redux';
import myStore from './store';
import ErrorPage from './components/ErrorPage';
import Posts from './components/Posts';
import Comments from './components/Сomments';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useRouteError: jest.fn(), 
}));
describe('index.js', () => {  

  test('renders App with router correctly', () => {
    render(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
          <App />   
      </MemoryRouter>
    );
    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });
  test('renders the Users component for the /users path', () => {
    render(
      <Provider store={myStore}>
        <MemoryRouter initialEntries={['/users']}>
        <Routes>
          <Route path="/users" element={<Users />} />
        </Routes>
      </MemoryRouter>
      </Provider>
      
    );
  
    expect(screen.getByText('Users:')).toBeInTheDocument();
  });
  
  test('renders the Posts component for the /posts path', () => {
    render(
      <Provider store={myStore}>
      <MemoryRouter initialEntries={['/posts']}>
        <Routes>
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </MemoryRouter>
      </Provider>
    );
  
    expect(screen.getByText('Posts:')).toBeInTheDocument();
  });
  
  test('renders the Comments component for the /comments path', () => {
    render(
      <Provider store={myStore}>
      <MemoryRouter initialEntries={['/comments']}>
        <Routes>
          <Route path="/comments" element={<Comments/>} />
        </Routes>
      </MemoryRouter>
      </Provider>
    );
  
    expect(screen.getByText('Comments:')).toBeInTheDocument();
  });
  
  test('renders the ErrorPage component for unknown paths', () => {    
    useRouteError.mockReturnValue({ statusText: 'Not Found' });
    render(
      <Provider store={myStore}>
      <MemoryRouter initialEntries={['/unknown']}>
        <Routes>
          <Route path="/unknown" element={<ErrorPage />} />
        </Routes>
      </MemoryRouter>
      </Provider>
    );
  
    expect(screen.getByText('Oops!')).toBeInTheDocument();
  });
  });
  
