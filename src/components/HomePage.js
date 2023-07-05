import { Fragment } from 'react';
import { useNavigate } from 'react-router';
import {useDispatch } from 'react-redux';
import { getUsersAsync, getPostsAsync, getCommentsAsync } from '../store/actions/users.actions'
import {Counter} from './Counter'

export const HomePage = () => {
   let navigate = useNavigate();
   const dispatch = useDispatch();

   function handleUsers(){
      dispatch(getUsersAsync());
      navigate('/users')
   };
   function handlePosts(){
      dispatch(getPostsAsync());
      navigate('/posts')
   };
   
   function handleComments(){
      dispatch(getCommentsAsync());
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