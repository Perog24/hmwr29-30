import {render, screen, fireEvent} from '@testing-library/react';
import { Counter } from './Counter';
import { Provider } from 'react-redux';
import myStore from '../store';

describe('<Counter/>', ()=>{
   test('chek init state', ()=>{
      render(
         <Provider store={myStore}>
            <Counter/>
         </Provider>);
      const htmlWithText = screen.getByText('Count: 1');
      expect(htmlWithText.textContent).toEqual('Count: 1')
   });
   test('tect Counter multypl-2', ()=>{
      render(
         <Provider store={myStore}>
            <Counter/>
         </Provider>);
      const MultyBTN = screen.getByTestId("multyBtn");
      fireEvent.click(MultyBTN);
      expect(screen.getByText('Count: 2')).toBeInTheDocument();
      fireEvent.click(MultyBTN);
      expect(screen.getByText('Count: 4')).toBeInTheDocument();
   });
   test('tect Counter divide-2', ()=>{
      render(
         <Provider store={myStore}>
            <Counter/>
         </Provider>);
      const DivedeBTN = screen.getByTestId("divideBtn");
      fireEvent.click(DivedeBTN);
      expect(screen.getByText('Count: 2')).toBeInTheDocument();
      fireEvent.click(DivedeBTN);
      expect(screen.getByText('Count: 1')).toBeInTheDocument();
   });
   test('tect Counter reset', ()=>{
      render(
         <Provider store={myStore}>
            <Counter/>
         </Provider>);
      const MultyBTN = screen.getByTestId("multyBtn");
      const ResetBTN = screen.getByTestId("resetBtn");
      fireEvent.click(MultyBTN);
      expect(screen.getByText('Count: 2')).toBeInTheDocument();
      fireEvent.click(ResetBTN);
      expect(screen.getByText('Count: 1')).toBeInTheDocument();
   })
})