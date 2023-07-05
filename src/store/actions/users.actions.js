import {getDataApi} from '../../api/fetchApi';
import {LOAD_USERS, LOAD_POSTS, LOAD_COMMENTS} from '../constants';

export const loadUsersAction = (payload) => ({
   type: LOAD_USERS,
   payload
});

export const loadPostsAction =(payload) => ({
   type: LOAD_POSTS,
   payload
});

export const loadCommentsAction = (payload) => ({
   type: LOAD_COMMENTS,
   payload
});

export const getUsersAsync = () => dispatch => {
   getDataApi('https://jsonplaceholder.typicode.com/users')
   .then(data=>{dispatch(loadUsersAction(data));
   })
   .catch(err => console.log("err:", err));
};

export const getPostsAsync = () => dispatch => {
   getDataApi('https://jsonplaceholder.typicode.com/posts/')
   .then(data  => {dispatch(loadPostsAction(data));
   })
   .catch((error)=>console.log(`Error in fetching posts ${error}`));
};

export const getCommentsAsync = () => dispatch => {
   getDataApi('https://jsonplaceholder.typicode.com/comments/')
   .then(data  => {dispatch(loadCommentsAction(data));
   })
   .catch((error)=>console.log(`Error in fetching posts ${error}`));
};
