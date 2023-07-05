import { Fragment } from 'react';
import { useNavigate } from 'react-router';
import {useDispatch } from 'react-redux';
import { getUsers, getPosts, getComments} from '../store/slices/api.slice'
import {Counter} from './Counter'

export const HomePage = () => {
   let navigate = useNavigate();
   const dispatch = useDispatch();

   function handleUsers(){
      dispatch(getUsers());
      navigate('/users')
   };
   function handlePosts(){
      dispatch(getPosts());
      navigate('/posts')
   };
   
   function handleComments(){
      dispatch(getComments());
      navigate('/comments')
   };

   return (
      <Fragment>
         <h3>Home page</h3>
         <Counter />
         <hr/>
         <button onClick = {handleUsers}>Users</button>
         <button onClick = {handlePosts}>Posts</button>
         <button onClick = {handleComments}>Comments</button>
      </Fragment>
   )
}