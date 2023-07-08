import { useSelector} from 'react-redux';

const Comments = () => {
   const comments = useSelector(state=>state.api.comments);
   return (
    <div>
      <h3>Comments:</h3>
      {(comments.length !== 0) && (
      <ol>
        {comments.map((comment, index) => (<li key={index}>{comment.name}</li> ))}
      </ol>
        )}      
    </div>
  );
}
export default Comments;