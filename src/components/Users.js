import { useSelector} from 'react-redux';

const Users = () => {
   const users = useSelector(state=>state.api.users);   

   return (
    <div>
      <h3>Users:</h3>
      {(users.length !== 0) && (
      <ol>
        {users.map((user, index) => (<li key={index}>{user.name}</li> ))}
      </ol>
        )}        
    </div>
  );
}
export default Users;