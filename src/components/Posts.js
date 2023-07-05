import { useSelector} from 'react-redux';

const Posts = () => {
   const posts = useSelector(state=>state.api.posts);
   return (
    <div>
      {(posts.length !== 0) && (
      <ol>
        {posts.map((post, index) => (<li key={index}>{post.title}</li> ))}
      </ol>
        )}     
    </div>
  );
}
export default Posts;