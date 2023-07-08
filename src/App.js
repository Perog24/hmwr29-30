import { Outlet } from 'react-router';
import { Provider } from 'react-redux';

import Navbar from './components/Navbar';
import myStore from './store';

import './App.css';

function App() {
  return (
    <Provider store={myStore}>
      <Navbar/>
      <Outlet/>
    </Provider>
  );
}

export default App;
