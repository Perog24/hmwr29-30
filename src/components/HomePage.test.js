import { render, screen, fireEvent,  waitFor } from '@testing-library/react';
import { HomePage } from './HomePage';
import { Provider } from 'react-redux';
import { Route, Routes, MemoryRouter } from 'react-router-dom';
import myStore from '../store';
import Users from './Users';
import Posts from './Posts';
import Comments from './Сomments'


describe('<HomePage/>', () => {
   test('should render the HomePage component correctly', async () => {
     render(
       <Provider store={myStore}>
         <MemoryRouter initialEntries={['/']}>
           <Routes>
             <Route path="/" element={<HomePage />} />
             <Route path="/users" element={<Users />} />
             <Route path="/posts" element={<Posts />} />
             <Route path="/comments" element={<Comments />} />
           </Routes>
         </MemoryRouter>
       </Provider>
     );
     expect(screen.getByText('Home page')).toBeInTheDocument();
   });
 
   test('testing handleUsers function', async () => {
     render(
       <Provider store={myStore}>
         <MemoryRouter initialEntries={['/']}>
           <Routes>
             <Route path="/" element={<HomePage />} />
             <Route path="/users" element={<Users />} />
             <Route path="/posts" element={<Posts />} />
             <Route path="/comments" element={<Comments />} />
           </Routes>
         </MemoryRouter>
       </Provider>
     );
     fireEvent.click(screen.getByTestId('users'));
     await waitFor(() => {
       expect(screen.getByText('Users:')).toBeInTheDocument();
     });
   });
 
   test('testing handlePosts function', async () => {
     render(
       <Provider store={myStore}>
         <MemoryRouter initialEntries={['/']}>
           <Routes>
             <Route path="/" element={<HomePage />} />
             <Route path="/users" element={<Users />} />
             <Route path="/posts" element={<Posts />} />
             <Route path="/comments" element={<Comments />} />
           </Routes>
         </MemoryRouter>
       </Provider>
     );
     fireEvent.click(screen.getByTestId('posts'));
     await waitFor(() => {
       expect(screen.getByText('Posts:')).toBeInTheDocument();
     });
   });
 
   test('testing handleComments function', async () => {
     render(
       <Provider store={myStore}>
         <MemoryRouter initialEntries={['/']}>
           <Routes>
             <Route path="/" element={<HomePage />} />
             <Route path="/users" element={<Users />} />
             <Route path="/posts" element={<Posts />} />
             <Route path="/comments" element={<Comments />} />
           </Routes>
         </MemoryRouter>
       </Provider>
     );
     fireEvent.click(screen.getByTestId('comments'));
     await waitFor(() => {
       expect(screen.getByText('Comments:')).toBeInTheDocument();
     });
   });
 });
