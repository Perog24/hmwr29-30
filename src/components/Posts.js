import { useSelector} from 'react-redux';

const Posts = () => {
   const posts = useSelector(state=>state.api.posts);
   return (
    <div>
      <h3>Posts:</h3>
      {(posts.length !== 0) && (
      <ol>
        {posts.map((post, index) => (<li key={index}>{post.title}</li> ))}
      </ol>
        )}     
    </div>
  );
}
export default Posts;